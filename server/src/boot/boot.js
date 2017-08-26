"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies - 3rd Party
const bodyParser = require("body-parser");
const errorHandler = require("errorhandler");
const express = require("express");
const expressValidator = require("express-validator");
const logger = require("morgan");
const path = require("path");
// Dependencies - Internal
const test = require('../api/test.endpoint');
// Express configuration
const app = express();
const apiRouter = express.Router();
app.set("port", process.env.PORT || 80);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(express.static(path.join(__dirname, "../../../public/dist")));
// API configuration
apiRouter.get('/', function (req, res) {
  res.status(200).json({ message: 'Welcome to the API...' });
});
app.use('/api', apiRouter);
// Endpoint configuration
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../../public/dist/', 'index.html'));
});
// Error Handler
// TODO: Remove for production
app.use(errorHandler());
app.listen(app.get('port'), function () {
  console.log("Server is listening on http://localhost:" + app.get('port') + " in " + app.get('env') + " mode");
  console.log("Press CTRL-C to stop.");
});
module.exports = app;
