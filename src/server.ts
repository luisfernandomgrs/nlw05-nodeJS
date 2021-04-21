import express, { response } from "express";
import "./database"; //Not's necessary to reference file index.ts...
import { routes } from "./routes";

const app = express();
const port = 3000;

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
*/

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server is running on port: ${port}`))