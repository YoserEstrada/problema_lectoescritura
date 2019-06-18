const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const ProblemasSchema = new Schema({
    idtipodeproblema: String,
    tipodeproblema:String,
    actividad:String,
    funcionarios:[
        {
           type: Schema.Types.ObjectId,
            ref: "Funcionario" 
        }
    ],
    estudiantes:[
        {
           type: Schema.Types.ObjectId,
            ref: "Estudiante" 
        }
    ]
    
});

var Problema = mongoose.model("Problemas",ProblemasSchema);
module.exports = Problema;