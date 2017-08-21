// Get dependencies
const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
// Setup the logger
const logger = morgan('combined');
app.use(logger);
// Get the API route
const api_router = express.Router();
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Point static path to the compiled angular 2 files
app.use(express.static(path.join(__dirname, "../../../public/dist")));
// Set the API route
// TODO: LINK ALL API ROUTES HERE, BEFORE REDIRECTING THE REST TO INDEX.HTML
api_router.get('/', (req, res) => {
  res.status(200).json({message: 'Welcome to the api...'});
});
app.use('/api', api_router);
// Catch all other routes and return the index
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../../public/dist/', 'index.html'));
});

// Get the port from the environment and store it in express
const port = process.env.PORT || 80;
app.set('port', port);
// Create the HTTP server
const server = http.createServer(app);
// Listen on the provided port, on all network interfaces
server.listen(port, () => {
  console.log(`Server Started On Port ${port}...`)
});
