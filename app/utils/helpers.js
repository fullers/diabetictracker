var axios = require("axios");

var helper = {
 getCurrentUser: function() {
    return axios.get("/user");
  },

 addData: function(date, time, level) {
    console.log("helpers.addData Running")
    return axios.post("/addData", {
        date: date,
        time: time,
        level: level 
    });
  },
  addPhysician: function(name, email) {
    console.log("helpers.addData Running")
    return axios.post("/addData", {
        name: name,
        email: email,
        physicianType: physicianType 
    });
  },
  addUser: function(name, username, password, targetmin, targetmax, userType) {
  	console.log("helpers.addUser Running")
  	return axios.post("/addUser", {
  		name: name,
  		username: username,
  		password: password,
  		min: targetmin,
  		max: targetmax,
  		userType: userType
  	});
  },

   getData: function(){
    return axios.get('/getData')
    .then(function(results){
        console.log("axios results", results);
        return results;
    })
  }

};

module.exports = helper;