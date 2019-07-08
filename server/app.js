const express = require('express');
const app = express();
const apiRouter = require('./routers/apiRouter');
const path = require('path');
const { handleWithCode, handle500, catchAll404 } = require('./errors');

app.use(express.static('database/toiletDatabase'));
app.use(express.static('server/public'));
app.use(express.static('database'));
app.use(express.json());
app.get('/', function(req, res) {
  res.sendFile(
    path.join(__dirname.replace(/server/, '') + '/Front End/index.html')
  );
});

app.use('/api/', apiRouter);
app.use('/*', catchAll404);
app.use(handleWithCode);
app.use(handle500);

module.exports = app;
