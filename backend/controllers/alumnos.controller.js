import { tablaAlumnos } from "../models/alumnos.model.js";

tablaAlumnos.create({
    alumno: "Jhosue",
    calificacion: 5,
    materia: "Matemáticas"
})

tablaAlumnos.create({
    alumno: "Ana",
    calificacion: 9,
    materia: "Español"
})

tablaAlumnos.create({
    alumno: "Pedro",
    calificacion: 7,
    materia: "Historia"
})

tablaAlumnos.create({
    alumno: "Maria",
    calificacion: 10,
    materia: "Química"
})

export const test = () => console.log("Se está llamando al controlador correctamente")