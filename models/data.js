var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataSchema = new Schema ({
  date: {
    type: String
  },
  time: {
    type: String
  },
  level: {
    type: String
  }
});

var Data = mongoose.model("Data", dataSchema);
module.exports = Data;