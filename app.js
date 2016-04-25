var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/fillInTheBlank';
var port = process.env.PORT || 3000;
var userRoutes = require('./routes/user_routes.js');

//establish connection to mongo database
mongoose.connect(mongoUrl);

//logs requests made to the app
app.use(logger('dev'));

//makes JS objects available in requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//create the root route
app.get('/', function(req, res) {
	res.send('Welcome to the home page');
});

//use user routes for those routes
app.use('/users', userRoutes);

//sets the port for the server
app.listen(port, function(){
	console.log('Magic is happening on ' + port);
});



