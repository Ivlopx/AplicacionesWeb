import { tablaAlumnos } from "../models/alumnos.model.js";

tablaAlumnos.create({
    nombre: "Jhosue",
    calificacion: 5,
    materia: "Matemáticas"
})

export const test = () => console.log("Se está llamando al controlador correctamente")