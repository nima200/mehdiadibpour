"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies - 3rd Party
var bodyParser = require("body-parser");
var errorHandler = require("errorhandler");
var express = require("express");
var expressValidator = require("express-validator");
var logger = require("morgan");
var path = require("path");
// Dependencies - Internal
var test = require('../api/test.endpoint');
// Express configuration
var app = express();
var apiRouter = express.Router();
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
//# sourceMappingURL=boot.js.map