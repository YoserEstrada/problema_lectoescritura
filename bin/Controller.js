const mongoose = require("mongoose");
const Funcionario = require("./models/Funcionario");
class Controller{
    constructor(){
        this.connect();
    }

    async connect(){
        try{
            await mongoose.connect(
                "mongodb+srv://isandy9310:93102103201@cluster0-d3hfy.mongodb.net/lectoescrituraDB?retryWrites=true&w=majority",
                {useNewUrlParser:true}
             );
             console.log("Conectados a la base de datos")
        } catch(e){
            console.error(e)
        }
    }

    getFuncionarios(res){
        Funcionario.find({}, (err,funcionarios)=>{
            if(err) throw err;
            res.send( funcionarios );

        })
    }
}


exports.controller = new Controller()