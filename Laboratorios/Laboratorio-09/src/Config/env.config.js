const dotenv = require('dotenv');
dotenv.config();

module.exports = {
 port: process.env.PORT,
 mongodb_uri_cloud: process.env.MONGODB_URI_CLOUD
}