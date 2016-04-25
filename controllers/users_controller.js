var User = require('../models/user.js');
var users = {};

//create action to display all users
users.index = function(req, res) {
	User.find({}, function(err, users) {
		if (err) {
			throw err
		};
		res.json(users);
	});
};

//create action to add a new user
users.create = function(req, res) {
	var user = new User();
	user.user_name = req.body.user_name;
	user.email = req.body.email;
	user.age = req.body.age;

	user.save(function(err) {
		if (err) {
			throw err
		};
		res.json({success: true, message: 'User created - HOORAY!'});
	});
};

//create action to show a single user
users.show = function(req, res) {
	User.find({email: req.params.email}, function(err, user) {
		if (err) {
			throw err
		};
		res.json(user);
	});
};

//create action to edit a single user
users.update = function(req, res) {
	User.findOneAndUpdate({email: req.params.email}, {age: req.body.age}, function(err, user) {
		if (err) {
			throw err
		};
		res.json(user);
	});
};

//create action to delete a single user
users.destroy = function(req, res) {
	User.remove({email: req.params.email}, function(err) {
		if (err) {
			throw err
		};
		res.json({success: true, message: "user destroyed!"});
	});
};

module.exports = users;



