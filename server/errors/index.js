exports.handleWithCode = (err, req, res, next) => {
    console.log(err)
    if (err.code) res.status(err.code).send(err)
    else next(err)
}

exports.handle500 = (err, req, res, next) => {
    console.log('something went wrong:', err)
    res.status(500).send({code:500, msg:'internal server error'})
}

// controller errors
exports.catchBadMethod = (req, res, next) => {
    next({code:405, msg: "bad method"})
}

exports.catchAll404 = (req, res, next) => {
    next({code:404, msg: "not found"})
}