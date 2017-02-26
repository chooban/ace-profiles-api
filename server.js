const express = require('express');
const logger = require('./app/util/logger');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const jwt = require('express-jwt');

const jwtCheck = jwt({
  secret: '',
  audience: ''
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(jwtCheck);
app.use('/profiles', routes);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res) {
    logger.error(err);
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// Production error handler
// No stacktraces leaked to user
app.use(function (err, req, res) {
  logger.error(err);
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});

module.exports = app;
