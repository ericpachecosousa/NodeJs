import express, { response } from "express";

 import "./database";

const app = express();

app.get("/",(request,response) =>{
  return response.send("Olá eric vamos trabalhar");
});

app.post("/users", (request,response) =>{
  return response.json({message:"Usuario salvo com sucesso!"});
});

app.listen(3333, () => console.log("Server está ok !"));