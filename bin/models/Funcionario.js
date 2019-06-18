const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const FuncionariosSchema = new Schema({
    idfuncionario: String,
    nombrefuncionario1: String,
    nombrefuncionario2: String,
    apellidofuncionario1: String,
    apellidofuncionario2: String,
    cargofuncionario:String,
    problemas:[
        {
           type: Schema.Types.ObjectId,
            ref: "Problema" 
        }
    ]
    
});

var Funcionario = mongoose.model("Funcionarios",FuncionariosSchema);
module.exports = Funcionario;