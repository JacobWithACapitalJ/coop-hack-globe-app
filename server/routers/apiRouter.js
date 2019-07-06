const express = require('express');
const toiletsRouter = require('./toiletsRouter')
const apiRouter = express.Router();
const { handleWithCode, catchAll404, handle500 } = require('../errors/')
const cors = require('cors')

apiRouter.use(cors())

apiRouter.get('/', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
apiRouter.use('/toilets', toiletsRouter);
apiRouter.use('/*', catchAll404)
apiRouter.use(handleWithCode)
apiRouter.use(handle500)

module.exports = apiRouter;
