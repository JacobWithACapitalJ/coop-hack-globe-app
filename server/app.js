const express = require('express');
const toiletsRouter = require('./toiletsRouter');


const apiRouter = express.Router();
const apiJSON = require('../api.json')
// apiRouter.route('/').get((req, res, next)=>res.status(200).send(apiJSON))
//     .all(badMethod)

apiRouter.use('/users', usersRouter);

module.exports = apiRouter;
