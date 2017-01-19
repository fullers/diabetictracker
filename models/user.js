var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: { 
  	type: String,
  	unique: true
  },
  email: {
  	type: String
  },
  password: {
  	type: String
  },
  targetmin: {
  	type: String
  },
  targetmax: {
  	type: String
  },
  userType: {
  	type: String
  },
  data: [{
  	// Store ObjectIds in the array
  	type: Schema.Types.ObjectId,
  	// The ObjectIds will refer to the ids in the Data model
  	ref: "data"
  }],
  physician: [{
  	// Store ObjectIds in the array
  	type: Schema.Types.ObjectId,
  	// The ObjectIds will refer to the ids in the Physician model
  	ref: "Physician"
  }]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);