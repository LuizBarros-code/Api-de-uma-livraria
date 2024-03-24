import { autor } from "../config/models/Autor.js";

class AutorController{

    static async ListarAutores(req,res){
        try{
            const listaautores = await autor.find({});
            res.status(200).json(listaautores);
        }catch(erro){
            res.status(500).json({message:`${erro.message} - falha na requisição!`});
        }
    }

    
    static async cadastrarAutor(req,res){
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: "criado com sucesso", autor: novoAutor});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar autor!`});
        }
    }

    static async listarAutorPorId (req,res){
        try{
            const id = req.params.id;
            const autorencontrado = await autor.findById(id);
            res.status(200).json(autorencontrado);
        }catch(error){
            res.status(500).json({message: `${erro.message} - falha ao encontrar o autor!`})
        }
    }

    static async atualizarAutor (req,res){
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id,req.body);
            res.status(200).json({message: "autor atualizado!"});
        }catch(error){
            res.status(500).json({message: `${erro.message} - falha ao atualizar o autor!`});
        }
    }

    static async excluirAutor (req,res){
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "autor deletado com sucesso!"});
        }catch(error){
            res.status(500).json({message: `${erro.message} - falha ao deletar autor!`})
        }
    }
}

export default AutorController;