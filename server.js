// Dependicies
var express = require("express");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var Sequelize = require('sequelize');
var models  = require('./models');
var User = require('./models/user');
var passport = require('passport');
var session = require('express-session');
var 



var app = express();

var sequelizeConnection = models.sequelize;

// sync the tables
sequelizeConnection.sync()

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// `*` (get) - will load your single HTML page (with ReactJS) in public/index.html. Make sure you put this after all other GET routes
// Simple index route
app.get("/", function(req, res) {
  res.sendFile('./public/index.html');
});

// Starts the server to begin listening
// =============================================================
var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});