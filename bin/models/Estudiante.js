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
    idasignatura:String,
    idgrado:String,
    idfuncionario:String,
    idreporte:String,
    idtipodeproblema:String
});
var Estudiante = mongoose.model("Estudiantes",EstudiantesSchema);
module.exports = Estudiante;

