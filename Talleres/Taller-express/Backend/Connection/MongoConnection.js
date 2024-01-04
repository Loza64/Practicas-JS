import mongoose from "mongoose";
import { MongodbUriCLoud } from "../SettingEnv.js";

export default function GetMongoConnection(){
 mongoose.set('strictQuery', true);
 mongoose.connect(MongodbUriCLoud);
 mongoose.connection.on('open', () => console.log('Connection database success'));
 mongoose.connection.on('error', () => console.error('Connection database error'));
}