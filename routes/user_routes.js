// var usersController = require('../controllers/users_controller.js');
var express			= require('express');
var userRoutes		= express.Router();

//create routes for /users
userRoutes.get('/', function(req, res) {
  var destinations = ['Burger Lounge', 'True Food', 'Tender Greens', '800 Degree Pizza'];
  res.render('home/index', {message: destinations});
});

// userRoutes.get('/burger', function(req, res) {
//   res.render('home/burger', {message: 'hello'});
// });
// userRoutes.post('/burger', function(req, res) {
//   res.send(req.body.optradio);
// });
userRoutes.get('/burger', function (req, res) {
        res.render('home/burger', {
            title: "Login", //page title
            action: "/login", //post action for the form
            fields: [
            {name:'email',type:'text',property:'required'},   //first field for the form
            {name:'password',type:'password',property:'required'}   //another field for the form
            ]
        });
    });

module.exports = userRoutes;
