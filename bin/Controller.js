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
    //traer todos los funcionarios
    getFuncionarios(res){
        Funcionario.find({}, (err,funcionarios)=>{
            if(err) throw err;
            res.send( funcionarios );
            })
            }

    //Agregar un funcionario
    setFuncionario(Funcionario, res) {
        Funcionario.create(Funcionario, function(err, newFuncionario) {
            if (err) throw err;
            res.send({ status: 200 });
            });
            }

    //Traer un funcionario por su id
        getFuncionarios(idfuncionario, res) {
            Funcionario.find({ _id: idfuncionario }, (err, funcionario) => {
            res.send({ status: 200, funcionario: funcionario });
            });
            }

    //traer todos los estudiantes
    getEstudiantes(res){
            Estudiante.find({}, (err,estudiantes)=>{
            if(err) throw err;
            res.send( estudiantes );
            })
            }

    //Agregar un estudiante
    setEstudiante(Estudiante, res) {
        Estudiante.create(Estudiante, function(err, newEstudiante) {
            if (err) throw err;
            res.send({ status: 200 });
            });
            }

    //Traer un estudiante por su id
        getEstudiante(idestudiante, res) {
            Estudiante.find({ _id: idestudiante }, (err, estudiante) => {
            res.send({ status: 200, estudiante: estudiante });
            });
            }

    //traer todas las asignaturas
    getAsignaturas(res){
            Asignatura.find({}, (err,asignaturas)=>{
            if(err) throw err;
            res.send( asignaturas );
            })
            }
    //traer todos los problemas
    getProblemas(res){
            Problema.find({}, (err,problemas)=>{
            if(err) throw err;
            res.send( problemas );
            })
            }

    //Agregar un problema
    setProblema(Problema, res) {
        Problema.create(Problema, function(err, newProblema) {
            if (err) throw err;
            res.send({ status: 200 });
            });
            }

    //Traer un problema por su id
        getProblema(idtipodeproblema, res) {
            Problema.find({ _id: idtipodeproblema }, (err, problema) => {
            res.send({ status: 200, problema: problema });
            });
            }
    //traer todos los responsables
    getResponsables(res){
            Responsable.find({}, (err,responsables)=>{
            if(err) throw err;
            res.send( responsables );
            })
            }
    //Agregar un responsable
    setResponsable(Responsable, res) {
        Responsable.create(Responsable, function(err, newResponsable) {
            if (err) throw err;
            res.send({ status: 200 });
            });
            }

    //Traer un responsable por su id
        getResponsable(idresponsable, res) {
            Responsable.find({ _id: idresponsable }, (err, responsable) => {
            res.send({ status: 200, responsable: responsable });
            });
            }
    //traer todos los reportes
    getReportes(res){
            Reporte.find({}, (err,reportes)=>{
            if(err) throw err;
            res.send( reportes );
            })
            }
}


exports.controller = new Controller()