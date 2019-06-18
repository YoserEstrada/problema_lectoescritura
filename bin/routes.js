const express = require("express");
const app = express();
const { controller } = require("./Controller");

app.get("/", (req, res) => {
  res.send("problema_lectoescritura");
});

app.get("/Funcionarios", (request, res) => {
controller.getFuncionarios(res);
});

app.get("/Estudiantes", (request,res)=>{
controller.getEstudiantes(res);
});

app.get("/Asignaturas", (request,res)=>{
controller.getAsignaturas(res);
});

app.get("/Problemas", (request,res)=>{
controller.getProblemas(res);
});

app.get("/Responsables", (request,res)=>{
controller.getResponsables(res);
});

app.get("/Reportes", (request,res)=>{
controller.getReportes(res);
});

exports.app = app;