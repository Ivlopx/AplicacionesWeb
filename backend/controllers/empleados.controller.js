import { tablaEmpleados } from "../models/empleados.model.js";

tablaEmpleados.create({
    no_empleado: 1,
    nombre: "Bredny",
    sueldo: 25000
})

tablaEmpleados.create({
    no_empleado: 2,
    nombre: "Omar",
    sueldo: 5000
})

export const test = () => console.log("Se está llamando al controlador correctamente")