// var usersController = require('../controllers/users_controller.js');
var express			= require('express');
var userRoutes		= express.Router();

//create routes for /users
userRoutes.get('/', function(req, res) {
  var destinations = ['Burger Lounge', 'True Food', 'Tender Greens', '800 Degree Pizza'];
  res.render('home/index', {message: destinations});
});


module.exports = userRoutes;
