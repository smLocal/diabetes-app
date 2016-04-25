// var usersController = require('../controllers/users_controller.js');
var express			= require('express');
var userRoutes		= express.Router();

//create routes for /users
userRoutes.get('/', function(req, res) {
  var destinations = ['Burger Lounge', 'True Food', 'Tender Greens', '800 Degree Pizza'];
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  newdate = month + "/" + day + "/" + year;
  res.render('home/index', {message: destinations, todayIs: newdate});
});


module.exports = userRoutes;
