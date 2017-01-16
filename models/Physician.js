var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var physicianSchema = new Schema ({

  name: {
    type: String
  },
  email: {
    type: String
  },
  physicianType: {
    type: String
  }
});

var Physician = mongoose.model("Physician", physicianSchema);
module.exports = Physician;