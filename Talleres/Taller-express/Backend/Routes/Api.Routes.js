import express from "express";
import { SaveEstudent } from "../Controllers/Estudiante.js";

const Routers = express.Router();

Routers.post('/students', SaveEstudent);

export default Routers