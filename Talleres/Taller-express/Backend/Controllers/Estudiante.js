import { Estudiante } from "../Models/Estudiante.js";

export const SaveEstudent = async (req, res) => {
 try {
  res.json(req.body.nombre)
 } catch (error) {
  res.status(500).json({ state: "failure", details: error.message });
 }
}