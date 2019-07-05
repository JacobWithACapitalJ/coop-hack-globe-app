const express = require('express');
const toiletsRouter = express.Router();
const { getToilets } = require('../controllers');
const { catchBadMethod } = require('../errors')

toiletsRouter.route('/')
    .get(getToilets)
    .all(catchBadMethod)

module.exports = toiletsRouter;
