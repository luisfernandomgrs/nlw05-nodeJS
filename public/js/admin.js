// Como desejamos que no momento que a página subir, já fique conectado...
// vamos deixar socket = io
const socket = io();
let connectionsUsers = [];

socket.on("admin_list_all_users", (connections) => {
  let template = document.getElementById("template").innerHTML;

  connectionsUsers = connections;
  document.getElementById("list_users").innerHTML = "";

  connections.forEach(connection => {
    const rendered = Mustache.render(template, {
      email: connection.user.email,
      id: connection.socket_id
    });

    document.getElementById("list_users").innerHTML += rendered;
  });
});

function call(id){
  const connection = connectionsUsers.find(_connection => _connection.socket_id === id);
  const template = document.getElementById("admin_template").innerHTML;
  const rendered = Mustache.render(template, {
    email: connection.user.email,
    id: connection.user_id
  });

  document.getElementById("supports").innerHTML += rendered;

  const params = {
    user_id: connection.user_id
  }

  socket.emit("admin_list_messages_by_user", params, messages => {
    const divMessages = document.getElementById(`allMessages${connection.user_id}`);

    messages.forEach(message => {
      const createDiv = document.createElement("div");

      if (message.admin_id === null){
        // aplicando código HTML sem o uso de Mustache...
        createDiv.className = "admin_message_client";
        // createDiv.innerHTML = `<span>${connection.user.email}</span>`;
        createDiv.innerHTML = `<span>${message.text}</span>`;
        // para manipular a data, faremos uso de "dayjs.min.js" que está presente como script em "admin.html"
        createDiv.innerHTML += `<span class="admin_date">${dayjs(message.created_at).format("DD/MM/YYYY HH:mm:ss")}</span>`;
      }
      else {
        createDiv.className = "admin_message_admin";
        createDiv.innerHTML = `Atendente: <span>${message.text}</span>`;
        createDiv.innerHTML += `<span class="admin_date">${dayjs(message.created_at).format("DD/MM/YYYY HH:mm:ss")}`;
      }

      divMessages.appendChild(createDiv);
    });
  });
};