const express = require('express')
const app = express()
const apiRouter = require('./routers/apiRouter')
const path = require('path')
var cors = require('cors')

app.use(cors())

app.get('/', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.use(express.static('database/toiletDatabase'))
app.use(express.static('server/public'))
app.use(express.static('database'))
app.use(express.json())
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname.replace(/server/,'') + '/Front End/index.html'));
});

app.use('/api/', apiRouter)

module.exports = app