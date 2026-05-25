import { Schema, model } from "mongoose";

const esquemaEmpleados = new Schema({
    no_empleado: Number,
    nombre: String,
    sueldo: Number
})

export const tablaEmpleados = new model("tabla_empleados", esquemaEmpleados)