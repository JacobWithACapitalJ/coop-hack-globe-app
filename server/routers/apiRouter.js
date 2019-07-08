const express = require('express');
const toiletsRouter = require('./toiletsRouter');
const apiRouter = express.Router();

apiRouter.use('/toilets', toiletsRouter);

module.exports = apiRouter;
