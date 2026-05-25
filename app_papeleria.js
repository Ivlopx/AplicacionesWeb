import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from "./backend/controllers/productos.controller.js";

dotenv.config()
mongoose.connect(process.env.url_bd_papeleria_gandhi)
.then(() => console.log("Conectado a la base de datos"))
.catch(() => console.log("No pudo conectarse a la base de datos"))

const app = express()
app.use(cors())


app.listen(4000, () => console.log("El servidor está funcionando"))

test()