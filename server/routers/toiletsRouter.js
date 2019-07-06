const express = require('express');
const toiletsRouter = express.Router();
const { getToilets, getBiggestToilet } = require('../controllers');
const { catchBadMethod } = require('../errors')

toiletsRouter.route('/')
    .get(getToilets)
    .all(catchBadMethod)

toiletsRouter.get('/biggest/:property', getBiggestToilet)

module.exports = toiletsRouter;
