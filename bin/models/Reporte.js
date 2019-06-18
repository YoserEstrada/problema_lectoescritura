const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const ReportesSchema = new Schema({
    reportes:[
        {
           type: Schema.Types.ObjectId,
            ref: "Reporte" 
        }
    ],
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
    ],
    problemas:[
        {
           type: Schema.Types.ObjectId,
            ref: "Problema" 
        }
    ]
    });

var Reporte = mongoose.model("Reportes",ReportesSchema);
module.exports = Reporte;