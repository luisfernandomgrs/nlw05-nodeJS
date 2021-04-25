import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService";
import { MessagesService } from "../services/MessagesService";

io.on("connect", async (socket) => {
  const connectionsService = new ConnectionsService();
  const messagesService = new MessagesService();
  const allConnectionsWithoutAdmin = await connectionsService.findAllWithoutAdmin();

  // Observe que não usaremos o websocket neste momento, mas o "io"...
  // O motivo é que não desejamos enviar somente para um id especifico,
  // mas para todos que estiverem ouvindo este evento.
  io.emit("admin_list_all_users", allConnectionsWithoutAdmin);

  socket.on("admin_list_messages_by_user", async (params, callback) => {
    const { user_id } = params;
    const allMessages = await messagesService.listByUser(user_id);

    callback(allMessages);
  });
});