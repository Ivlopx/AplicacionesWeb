import { Schema, model } from "mongoose";

const esquemaProductos = new Schema({
    producto: String,
    stock: Number,
    precio: Number
})

export const tablaProductos = new model("tabla_productos", esquemaProductos)