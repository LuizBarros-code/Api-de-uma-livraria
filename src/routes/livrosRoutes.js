import  Express  from "express";
import LivroController from "../controllers/livroControllers.js";


const routes = Express.Router();

routes.get("/livros", LivroController.ListarLivros);
routes.get("/livros/:id", LivroController.listarLivrosPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.excluirlivro);

export default routes;
