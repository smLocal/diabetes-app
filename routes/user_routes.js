var usersController = require('../controllers/users_controller.js');
var express			= require('express');
var userRoutes		= express.Router();

//create routes for /users
userRoutes.route('/')
	.get(usersController.index);


module.exports = userRoutes;
