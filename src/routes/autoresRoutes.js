import  Express  from "express";
import AutorController from "../controllers/autoresControllers.js";

const routes = Express.Router();

routes.get("/autores", AutorController.ListarAutores);
routes.get("/autores/:id", AutorController.listarAutorPorId);
routes.post("/autores", AutorController.cadastrarAutor);
routes.put("/autores/:id", AutorController.atualizarAutor);
routes.delete("/autores/:id", AutorController.excluirAutor);

export default routes;