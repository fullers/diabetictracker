var mongoose = require("mongoose");
var Promise = require("bluebird");
mongoose.Promise = Promise;

//DB
 var dbURI = 'mongodb://localhost/diabetictracker';
if (process.env.NODE_ENV === 'production') {
    dbURI= "";
}
mongoose.connect(dbURI);
var db = mongoose.connection;

  db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
  });

  db.once("open", function() {
    console.log("Mongoose connection successful.");
  });
