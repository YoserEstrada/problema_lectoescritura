const express = require("express");
const app = express();
const { controller } = require("./Controller");

app.get("/", (req, res) => {
  res.send("problema_lectoescritura");
});

app.get("/Funcionarios", (req, res) => {
  /*let funcionarios = [
    { idfuncionario:"", nombrefuncionario1: "", nombrefuncionario2: "", apellidofuncionario1: "",
      apellidofuncionario2:"", cargofuncionario:"", idtipodeproblema:""}
  ];
  res.send(funcionarios);*/
  controller.getFuncionarios(res);
});

app.get("/Estudiantes", (req,res)=>{
    /*let estudiantes = [
        {idestudiante:"", nombreestudiante1:"", nombreestudiante2:"", apellidoestudiante1:"",
        apellidoestudiante2:"", sexo:"", edad:"", idasignatura:"", idgrado:"", idfuncionario:"",
        idreporte:"", idtipodeproblema:""}
    ];
    res.send(estudiantes);*/
controller.getEstudiantes(res);
});

app.get("/Asignaturas", (req,res)=>{
    /*let asignaturas = [
        {idasignatura:"", nombreasignatura:"", grado:""}
    ];
    res.send(asignaturas);*/
controller.getAsignaturas(res);
});

app.get("/Problemas", (req,res)=>{
    /*let problemas = [
        {idtipodeproblema:"", tipodeproblema:"", actividad:"", idfuncionario:"", idestudiante:""}
    ];
    res.send(problemas);*/
controller.getProblemas(res);
});

app.get("/Responsables", (req,res)=>{
    /*let responsables = [
        {idresponsable:"", nombreresponsable1:"", nombreresponsable2:"", apellidoresponsable1:"",
        apellidoresponsable2:"", telefonoresponsable:"", idestudiante:""}
    ];
    res.send(responsables);*/
controller.getResponsables(res);
});

app.get("/Reportes", (req,res)=>{
    /*let reportes = [
        {idreporte:"", idfuncionario:"", idestudiante:"", idtipodeproblema:""}
    ];
    res.send(reportes);*/ 
controller.getReportes(res);
});

exports.app = app;