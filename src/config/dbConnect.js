import mongoose from "mongoose"

async function conectaDB(){
    mongoose.connect(process.env.DB_STRING_CONEXAO);
    return mongoose.connection;
}


export default conectaDB;