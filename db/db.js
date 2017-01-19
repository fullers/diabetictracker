var mongoose = require("mongoose");
var Promise = require("bluebird");
mongoose.Promise = Promise;

//DB
//  var dbURI = 'mongodb://localhost/diabetictracker';
// if (process.env.NODE_ENV === 'production') {
//     dbURI= "";
// }
// mongoose.connect(dbURI);
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('../app/config/config.js');
var mongoose = require('../app/config/mongoose.js');
var express = require('express');

var db = mongoose(),
    app = express();

app.listen(config.port);

module.exports = app;
console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);

// var db = mongoose.connection;

//   db.on("error", function(err) {
//     console.log("Mongoose Error: ", err);
//   });

//   db.once("open", function() {
//     console.log("Mongoose connection successful.");
//   });
