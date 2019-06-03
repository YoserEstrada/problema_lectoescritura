const mongoose = require("mongoose");
const Funcionario = require("./models/Funcionario");
const Estudiante = require("./models/Estudiante");
const Asignatura = require("./models/Asignatura");
const Problema = require("./models/Problema");
const Responsable = require("./models/Responsable");
const Reporte = require("./models/Reporte");

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

    getEstudiantes(res){
            Estudiante.find({}, (err,estudiantes)=>{
            if(err) throw err;
            res.send( estudiantes );
            })
            }

    getAsignaturas(res){
            Asignatura.find({}, (err,asignaturas)=>{
            if(err) throw err;
            res.send( asignaturas );
            })
            }

    getProblemas(res){
            Problema.find({}, (err,problemas)=>{
            if(err) throw err;
            res.send( problemas );
            })
            }

    getResponsables(res){
            Responsable.find({}, (err,responsables)=>{
            if(err) throw err;
            res.send( responsables );
            })
            }
    
    getReportes(res){
            Reporte.find({}, (err,reportes)=>{
            if(err) throw err;
            res.send( reportes );
            })
            }
}


exports.controller = new Controller()