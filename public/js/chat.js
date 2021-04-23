document.querySelector("#start_chat").addEventListener("click", (event) => {

  const socket = io();
  const chat_help = document.getElementById("chat_help");
  const chat_in_support = document.getElementById("chat_in_support");
  const email = document.getElementById("email").value;
  const text = document.getElementById("txt_help").value;

  chat_help.style.display = "none";
  chat_in_support.style.display = "block";

  socket.on("connect", () => {

    const params = {
      email,
      text
    };

    socket.emit("client_first_access", params, (call, err) => {
      if (err) {
        console.err(err);
      } else {
        console.log(call);
      }
    })
  })
});