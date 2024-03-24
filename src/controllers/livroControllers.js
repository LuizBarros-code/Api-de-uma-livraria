import livro from "../config/models/Livro.js";
import {autor} from "../config/models/Autor.js";


class LivroController{

    static async ListarLivros(req,res){
        try{
            const listalivros = await livro.find({});
            res.status(200).json(listalivros);
        }catch(erro){
            res.status(500).json({message:`${erro.message} - falha na requisição!`});
        }
    }

    
    static async cadastrarLivro(req,res){
        const novoLivro = req.body; 
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message: "criado com sucesso", livro: novoLivro});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro!`});
        }
    }

    static async listarLivrosPorId (req,res){
        try{
            const id = req.params.id;
            const livroencontrado = await livro.findById(id);
            res.status(200).json(livroencontrado);
        }catch(error){
            res.status(500).json({message: `${erro.message} - falha ao encontrar o livro!`})
        }
    }

    static async atualizarLivro (req,res){
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id,req.body);
            res.status(200).json({message: "livro atualizado!"});
        }catch(error){
            res.status(500).json({message: `${erro.message} - falha ao atualizar o livro!`});
        }
    }

    static async excluirlivro (req,res){
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "livro deletado com sucesso!"});
        }catch(error){
            res.status(500).json({message: `${erro.message} - falha ao deletar livro!`})
        }
    }
}

export default LivroController;


