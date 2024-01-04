const express = require('express');
const debug = require('debug')('movies-api:server');
const morgan = require('morgan');
const cors = require('cors');
const { port } = require('./src/Config/env.config')
const GetMongoConnection = require('./src/Config/db.config');
const mainRouter = require('./src/Routes/main.router')
const { errorHandler } = require('./src/Middlewares/error.middleware');
const bodyparser = require('body-parser')

GetMongoConnection();
const app = express();

app.use(cors());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use('/api/v1', mainRouter);
app.use(errorHandler);

app.listen(port, () => {
 debug(`listening on port ${port}`)
})