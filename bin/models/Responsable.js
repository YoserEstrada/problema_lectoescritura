const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const ResponsablesSchema = new Schema({
    idresponsable:String,
    nombreresponsable1:String,
    nombreresponsable2:String,
    apellidoresponsable1:String,
    apellidoresponsable2:String,
    telefonoresponsable:String,
    estudiantes:[
        {
           type: Schema.Types.ObjectId,
            ref: "Estudiante" 
        }
    ]
});

var Responsable = mongoose.model("Responsables",ResponsablesSchema);
module.exports = Responsable;