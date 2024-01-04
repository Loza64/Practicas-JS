const debug = require('debug')('movies-api:db');
const mongoose = require('mongoose');
const { mongodb_uri_cloud } = require('./env.config');

const GetMongoConnection = async () => {
 try {
   await mongoose.connect(mongodb_uri_cloud);
   debug('Connected successfully to database!');
 } catch (error) {
   debug("[Error]: Can't connect to database!");
 }
}

module.exports = GetMongoConnection;