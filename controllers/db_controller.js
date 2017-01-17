var express = require("express");
var router = express.Router();
var db = require("../db/db.js");
var path = require("path");

var Data = require("../models/Data");
var User = require("../models/User");
var Physician = require("../models/Physician");

router.post("/addData", function(req, res) {
  Data.create({
    date: req.body.date,
    time: req.body.time,
    level: req.body.level
  }, function(err,doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
});

router.post("/addPhysician", function(req, res) {
  Data.create({
    name: req.body.name,
    email: req.body.email,
    physicianType: req.body.physicianType
  }, function(err,doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
});

router.post("/addUser", function(req, res) {
  User.create({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    targetmin: req.body.targetmin,
    targetmax: req.body.targetmax,
    userType: req.body.userType
  }, function(err,doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

  router.get("/getData", function(req, res) {
    Data.findAll().exec(function(err,docs) {
      if (err) {
        console.log(err);
        res.send(err);
      }
      else {
        res.send(docs);
      }
    });
  });

});