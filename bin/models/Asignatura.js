const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const AsignaturasSchema = new Schema({
    idasignatura:String,
    nombreasignatura:String,
    grado:String
});

var Asignatura = mongoose.model("Asignaturas",AsignaturasSchema);
module.exports = Asignatura;