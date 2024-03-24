import express from "express";
import conectaDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();
routes(app)

const conexao = await conectaDB();

conexao.on("error", (erro) =>{
    console.error("erro de conexão", erro);
});

conexao.once("open", () =>{
    console.log("conexão com o banco funcionou com sucesso!!");
})

export default app;