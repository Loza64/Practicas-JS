const express  = require('express')
const moviesRouter = require('./movie.router');
const router = express.Router();

router.use('/movies', moviesRouter);
module.exports = router;