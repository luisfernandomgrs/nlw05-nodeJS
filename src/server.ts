import express, { response } from "express";

const app = express();
const port = 3000;

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
*/

app.get("/", (request, response) => {
  return response.json({
    message: "Hello NLW #05"
  });
});

app.post("/", (request, response) => {
  return response.json({
    message: "data update successfully :)"
  })
});

app.listen(port, () => console.log(`Server is running on port: ${port}`))