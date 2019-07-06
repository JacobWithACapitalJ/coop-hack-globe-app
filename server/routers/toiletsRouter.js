const express = require('express');
const toiletsRouter = express.Router();
const { getToilets, getBiggestToilet } = require('../controllers');
const { catchBadMethod } = require('../errors')

toiletsRouter.get('/biggest/:property', getBiggestToilet)

toiletsRouter.route('/')
    .get(getToilets)
    .all(catchBadMethod)

module.exports = toiletsRouter;
