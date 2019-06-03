const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const ProblemasSchema = new Schema({
    idtipodeproblema: String,
    tipodeproblema:String,
    actividad:String,
    idfuncionario:String,
    idestudiante:String
});

var Problema = mongoose.model("Problemas",ProblemasSchema);
module.exports = Problema;