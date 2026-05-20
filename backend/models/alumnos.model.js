import { Schema, model } from "mongoose";

const esquemaAlumnos = new Schema({
    nombre: String,
    calificacion: Number,
    materia: String
})

export const tablaAlumnos = new model("tabla_alumnos_reprobados", esquemaAlumnos)