// var usersController = require('../controllers/users_controller.js');
var express			= require('express');
var userRoutes		= express.Router();

//create routes for /users
userRoutes.get('/', function(req, res) {
  res.json({message: 'hello from users /'});
});


module.exports = userRoutes;
