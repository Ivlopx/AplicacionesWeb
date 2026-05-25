import { tablaProductos } from "../models/productos.model.js";

tablaProductos.create({
    producto: "Coca-Cola",
    stock: 15,
    precio: 26
})

tablaProductos.create({
    producto: "Sabritas",
    stock: 20,
    precio: 21
})

tablaProductos.create({
    producto: "Cuaderno",
    stock: 50,
    precio: 35
})

export const test = () => console.log("Se está llamando al controlador correctamente")