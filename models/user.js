var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;
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

UserSchema.pre('save', function(next) {
    var user = this;

// only hash the password if it has been modified (or is new)
if (!user.isModified('password')) return next();

// generate a salt
bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
});


});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);