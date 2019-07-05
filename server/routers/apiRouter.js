const express = require('express');
// const {badMethod} = require('../errors');
const toiletsRouter = require('./toiletsRouter')
const apiRouter = express.Router();
const { getToilets } = require('../controllers')
// const apiJSON = require('../api.json')
// apiRouter.route('/').get((req, res, next)=>res.status(200).send(apiJSON))
//     .all(badMethod)
apiRouter.use('/toilets', toiletsRouter);

module.exports = apiRouter;
