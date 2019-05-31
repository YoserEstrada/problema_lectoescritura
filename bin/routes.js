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

app.get("/estudiantes", (req,res)=>{
    let estudiantes = [
        {idestudiante:"", nombreestudiante1:"", nombreestudiante2:"", apellidoestudiante1:"",
        apellidoestudiante2:"", sexo:"", edad:"", idasignatura:"", idgrado:"", idfuncionario:"",
        idreporte:"", idtipodeproblema:""}
    ];
    res.send(estudiantes);
});

app.get("/asignaturas", (req,res)=>{
    let asignaturas = [
        {idasignatura:"", nombreasignatura:"", grado:""}
    ];
    res.send(asignaturas);
});

app.get("/problemas", (req,res)=>{
    let problemas = [
        {idtipodeproblema:"", tipodeproblema:"", actividad:"", idfuncionario:"", idestudiante:""}
    ];
    res.send(problemas);
});

app.get("/responsables", (req,res)=>{
    let responsables = [
        {idresponsable:"", nombreresponsable1:"", nombreresponsable2:"", apellidoresponsable1:"",
        apellidoresponsable2:"", telefonoresponsable:"", idestudiante:""}
    ];
    res.send(responsables);
});

app.get("/reportes", (req,res)=>{
    let reportes = [
        {idreporte:"", idfuncionario:"", idestudiante:"", idtipodeproblema:""}
    ];
    res.send(reportes);
});

exports.app = app;