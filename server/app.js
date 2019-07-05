const express = require('express')
const app = express()
const apiRouter = require('./routers/apiRouter')
const { handleWithCode, catchAll404, handle500 } = require('./errors/')
app.use(express.json())

app.use('/api/', apiRouter)
app.use('/*', catchAll404)

// app.use(handlePGerrors)
app.use(handleWithCode)
app.use(handle500)

module.exports = app