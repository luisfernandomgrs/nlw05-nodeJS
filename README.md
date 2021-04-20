# nlw05-nodeJS

[NLW#5] Trilha Node.js

# 🚀

## Como inicializar o projeto e rodar a aplicação:

```cmd
	yarnn init -y
```

-y parâmetro para "yes" to all...
Não requer nenhuma confirmação para a configuração. Cria um package.json com a configuração default.

```cmd
	yarn dev
```

Roda a aplicação através do script definido como "dev"...

# Dependencias:

Express - um micro framework muito completo, que nos atende muito bem

- yarn add express

- yarn add @types/express -D

- yarn add typescript -D

- yarn tsc --init
  |
  +---> inicializa o arquivo de configuração do typescript
  : não esqueça de definir "strict:" como false.

- yarn add ts-node-dev -D

## Você precisa definir o script, no package.json

```json
  "scripts": {
      "dev": "ts-node-dev src/server.ts"
  },
```
