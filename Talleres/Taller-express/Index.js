import express from 'express';
import { port } from './Backend/SettingEnv.js';
import ServerApp from './Backend/Application.js';

const Server = express();

Server.use(ServerApp);
Server.listen(port, () => {
 console.log(`listening on ${port}`);
})