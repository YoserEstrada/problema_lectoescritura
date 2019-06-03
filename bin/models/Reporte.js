const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const ReportesSchema = new Schema({
    idreporte:String,
    idfuncionario:String,
    idestudiante:String,
    idtipodeproblema:String
});

var Reporte = mongoose.model("Reportes",ReportesSchema);
module.exports = Reporte;