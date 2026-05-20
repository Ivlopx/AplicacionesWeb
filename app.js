import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from "./backend/controllers/alumnos.controller.js";

dotenv.config()
mongoose.connect(process.env.url_bd)
.then(() => console.log("Conectado a la base de datos"))
.catch(() => console.log("No pudo conectarse a la base de datos"))

const app = express()
app.use(cors())


app.listen(4000, () => console.log("El servidor está funcionando"))

test()