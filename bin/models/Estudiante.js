const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const EstudiantesSchema = new Schema ({
    idestudiante:String,
    nombreestudiante1:String,
    nombreestudiante2:String,
    apellidoestudiante1:String,
    apellidoestudiante2:String,
    sexo:String,
    edad:String,
    asignaturas:[
        {
            type: Schema.Types.ObjectId,
            ref: "Asignatura"
        }
    ],
    funcionarios:[
        {
           type: Schema.Types.ObjectId,
            ref: "Funcionario"
        }
    ],
    reportes:[
        {
           type: Schema.Types.ObjectId,
            ref: "Reporte"
        }
    ],
    problemas:[
        {
           type: Schema.Types.ObjectId,
            ref: "Problema"
        }
    ],

});
var Estudiante = mongoose.model("Estudiantes",EstudiantesSchema);
module.exports = Estudiante;

