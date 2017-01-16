// Dependicies
var express = require("express");
var bodyParser = require('body-parser');
var logger = require("morgan");
var path = require("path");
var db = require("./db/db.js")
var passport = require('passport');
var LocalStrategy= require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var session = require('express-session');

// Require Schema from Database
var User = require('./models/user');
var Data = require('./models/data');
var Physician = ('./models/physician');

// Intialize Express
var app = express();
var PORT = process.env.PORT || 3000;


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

//Express session
  app.use(session({
    secret: "Thisismysecretsessionforusers!",
    resave: false,
    saveUninitialized: false
  }));

//Passport
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(function(user,done) {
    done(null, user.id); 
  });

  passport.deserializeUser(function(id,done) {
    User.findById(id, function (err,user) {
      done(err,user);
    });
  });

//Body-Parser
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.text());
  app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// `*` (get) - will load your single HTML page (with ReactJS) in public/index.html. Make sure you put this after all other GET routes
// Simple index route
app.get("/", autoRedirect, function(req, res) {
  res.sendFile('./public/index.html');
});

//LOCAL AUTH

app.post("/addPhysician", function(req, res) {

  Physician.create(new Physician({
    name: req.body.name,
    email: req.body.email,
    physicianType: req.body.physicianType
  }),

  req.body.password, function(err, user) {
    if(err){
      console.log(err);
      return res.sendFile(path.resolve(__dirname, "public", "index.html"));
    }
    passport.authenticate("local")(req, res, function() {
      res.redirect("/");
    });
  })
});

app.post("/addData", function(req, res) {

  Data.create(new Data({
    date: req.body.date,
    time: req.body.time,
    level: req.body.level
  }),

  req.body.password, function(err, user) {
    if(err){
      console.log(err);
      return res.sendFile(path.resolve(__dirname, "public", "index.html"));
    }
    passport.authenticate("local")(req, res, function() {
      res.redirect("/");
    });
  })
});


app.post("/addUser", function(req, res) {

  User.register(new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    targetmin: req.body.targetmin,
    targetmax: req.body.targetmax,
    userType: req.body.userType
  }),

  req.body.password, function(err, user) {
    if(err){
      console.log(err);
      return res.sendFile(path.resolve(__dirname, "public", "index.html"));
    }
    passport.authenticate("local")(req, res, function() {
      res.redirect("/");
    });
  })
});

  app.post("/login", passport.authenticate("local", {
      failureRedirect: "/"
  }), function(req, res) {
      reRoute(req,res);
  });

    function isLoggedIn(req,res,next){
      if(req.isAuthenticated()){
        return next();
      }
      res.redirect("/");
  }
      function reRoute(req,res){
     if (req.user.userType === "User") {
      res.redirect("#/userchoice");
    } else if (req.userType === "Physician") {
      res.redirect("#/view");
    } else {
      res.redirect("#/profile");
    }
  }
    function autoRedirect(req,res,next){
      if(req.isAuthenticated()){
        reRoute(req,res);
      } else {
        res.sendFile(path.resolve(__dirname, "public", "index.html"));
      }
  }

 app.get('/user', function(req,res){
    res.send(req.user)
  });

//Restricting routes
  app.get("/login", function(req,res) {
    res.sendFile(path.resolve(__dirname, "public", "index.html"))
  });

  // app.get("/profile", function(req,res) {
  //   res.sendFile(path.resolve(__dirname, "public", "index.html"))
  // });

  app.get("/user", isLoggedIn, function(req,res) {
    if (req.user.userType === "User") {
        res.sendFile(path.resolve(__dirname, "public", "index.html"))
    } else {
        res.sendFile(path.resolve(__dirname, "public", "notauth.html"))
    }
  });

  app.get("/physician", isLoggedIn, function(req,res) {
    if (req.user.userType === "Physician") {
        res.sendFile(path.resolve(__dirname, "public", "index.html"))
    } else {
        res.sendFile(path.resolve(__dirname, "public", "notauth.html"))
    }
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  //var routes = require('./controllers/db_controller.js');
  // app.use('/', isLoggedIn, routes);

  
// Starts the server to begin listening
// =============================================================


app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});