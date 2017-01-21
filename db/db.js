var mongoose = require("mongoose");
var Promise = require("bluebird");
mongoose.Promise = Promise;

//DB

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('../app/config/config.js');
var mongoose = require('../app/config/mongoose.js');
var express = require('express');

var db = mongoose(),
    app = express();

app.listen(config.port);

module.exports = app;
console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);