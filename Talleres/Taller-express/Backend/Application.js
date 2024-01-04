import express from "express";
import GetMongoConnection from "./Connection/MongoConnection.js";
import Routers from './Routes/Api.Routes.js'
import bodyParser from "body-parser";

const ServerApp = express();

GetMongoConnection();
ServerApp.use(bodyParser.json());
ServerApp.use(bodyParser.urlencoded({ extended: true }));
ServerApp.use('/route/api', Routers)

export default ServerApp;
