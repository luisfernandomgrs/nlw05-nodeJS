import express, { response } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io"
import path from "path";
import "./database"; //Not's necessary to reference file index.ts...
import { routes } from "./routes";

const app = express();

const http = createServer(app);
const io = new Server(http);

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
*/

/**
 * configuração necessária para utilizarmos o html em
 * ../public/html/client.html dentro das nossas rotas.
 */
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

io.on("connection", (socket: Socket) => {
  // console.log(`Connected at by id: ${socket.id}`)
});

app.use(express.json());
app.use(routes);

export { http, io };