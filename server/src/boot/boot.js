"use strict";
// Dependencies - 3rd Party
const bodyParser = require("body-parser");
const errorHandler = require("errorhandler");
const express = require("express");
const expressValidator = require("express-validator");
const logger = require("morgan");
const path = require("path");
// Dependencies - Internal
const endpoints = require('../api/config');
const mongo = require('../services/mongo').connect;
// Express configuration
const app = express();
const apiRouter = express.Router();
app.set('env', 'development'); // TODO: Set to production once project is complete
app.set("port", process.env.PORT || 80);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static(path.join(__dirname, "../../../public/dist")));
// API configuration
apiRouter.get('/', function (req, res) {
  res.status(200).json({ message: 'Welcome to the API...' });
});
app.use('/api', apiRouter);
// Endpoint configuration
endpoints.init(app, apiRouter);
// Error Handler
if (app.get('env') === 'development') {
  app.use(errorHandler());
}
app.listen(app.get('port'), function () {
  console.log("Server is listening on http://localhost:" + app.get('port') + " in " + app.get('env') + " mode");
  console.log("Press CTRL-C to stop.");
});
module.exports = app;
