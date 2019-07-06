const express = require('express');
const toiletsRouter = require('./toiletsRouter')
const apiRouter = express.Router();
const { handleWithCode, catchAll404, handle500 } = require('../errors/')

apiRouter.use(cors())
apiRouter.use('/toilets', toiletsRouter);
apiRouter.use('/*', catchAll404)
apiRouter.use(handleWithCode)
apiRouter.use(handle500)

module.exports = apiRouter;
