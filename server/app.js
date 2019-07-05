const express = require('express')
const app = express()
const apiRouter = require('./routers/apiRouter')
const {getToilets} = require('./controllers')
const { handleWithCode, catchAll404, handle500 } = require('./errors/')
app.use(express.json())

app.use('/api/', apiRouter)
agg.get('/',(req, res, next)=> res.sendFile(path.join(__dirname + '/index.html'))
app.use('/*', catchAll404)

// app.use(handlePGerrors)
app.use(handleWithCode)
app.use(handle500)

module.exports = app