/**
 * Tipos de parâmetros
 * Routes Params => Parametros de rotas
 *                  http://localhost:3000/settings/1
 * Query params => Geralmente usados para Filtros e Buscas
 *                  http://localhost:3000/settings/1?search=algumacoisa
 * Body Params => Em caso de insert onde precisamos enviar objetos em nossas requisições
 *                  request.body
 * 
 */

import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { MessagesController } from "./controllers/MessagesController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.get("/messages/:id", messagesController.showByUser);
routes.post("/messages", messagesController.create);

export { routes };