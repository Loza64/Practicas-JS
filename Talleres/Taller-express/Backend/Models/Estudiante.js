import { model, Schema } from "mongoose";

const estudiante = new Schema({
 nombre: { type: String, required: true },
 edad: { type: Number, required: true },
 carrera: { type: String, required: true },
 promedio: { type: Number, required: true }
}, { versionKey: false })

export const Estudiante = model("estudiantes", estudiante)