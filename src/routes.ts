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

const routes = Router();
const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export { routes };