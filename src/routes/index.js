import  Express  from "express";
import livros from "./livrosRoutes.js"
import autores from "./autoresRoutes.js"

const routes = (app) => {
    app.route("/").get((req,res) => req.status(200).send("Curso de node.js"));

    app.use(Express.json(),livros,autores);

}

export default routes;