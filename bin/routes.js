const express = require("express");
const app = express();
const { controller } = require("./Controller");
const bodyParser = require("body-parser");

//pagina principal
app.get("/", (req, res) => {
  res.send("problema_lectoescritura");
});

//traer todos los funcionarios
app.get("/Funcionarios", (req, res) => {
controller.getFuncionarios(res);
});

//Agregar un funcionario
app.post("/Funcionarios", function(req, res) {
  let { Funcionario } = req.body;
  controller.setFuncionario(Funcionario, res);
});

//Traer un funcionario por su id
app.get("/Funcionarios/:idfuncionario", function(req, res) {
  let { idfuncionario } = req.params;
  controller.getFuncionarios(idfuncionario, res);
});

//traer todos los estudiantes
app.get("/Estudiantes", (req,res)=>{
controller.getEstudiantes(res);
});

//Agregar un estudiante
app.post("/Estudiantes", function(req, res) {
  let { Estudiante } = req.body;
  controller.setEstudiante(Estudiante, res);
});

//Traer un estudiante por su id
app.get("/Estudiantes/:idestudiante", function(req, res) {
  let { idestudiante } = req.params;
  controller.getEstudiantes(idestudiante, res);
});

//traer todas las asignaturas
app.get("/Asignaturas", (request,res)=>{
controller.getAsignaturas(res);
});

//traer todos los problemas
app.get("/Problemas", (request,res)=>{
controller.getProblemas(res);
});

//Agregar un problema
app.post("/Problemas", function(req, res) {
  let { Problema } = req.body;
  controller.setProblema(Problema, res);
});

//Traer un problema por su id
app.get("/Problemas/:idtipodeproblema", function(req, res) {
  let { idtipodeproblema } = req.params;
  controller.getProblemas(idtipodeproblema, res);
});

//traer todos los responsables
app.get("/Responsables", (request,res)=>{
controller.getResponsables(res);
});

//Agregar un responsable
app.post("/Responsables", function(req, res) {
  let { Responsable } = req.body;
  controller.setResponsable(Responsable, res);
});

//Traer un responsable por su id
app.get("/Responsables/:idresponsable", function(req, res) {
  let { idresponsable } = req.params;
  controller.getResponsables(idresponsable, res);
});

//traer todos los reportes
app.get("/Reportes", (request,res)=>{
controller.getReportes(res);
});


exports.app = app;