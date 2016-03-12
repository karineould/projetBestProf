var Client = require('../models/Client');
var Sequelize = require ('sequelize');

var Clients = {
	connect: function(req,res){
		connect_users = {
			username: req.body.username;
			password_users: req.body.password
		}
		console.log('--------Informations rentrées LogIn--------');
    	console.log('infos rentrées : ');
    	console.log('email : ' + connect_users.username);
    	console.log('password : ' + connect_user.password_users);
		
		if (!req.body.username || !req.body.password) {
        	res.send('login failed');
    	} else if(req.body.username == connect_users.username && req.body.password == connect_users.password_users) {
        	req.session.user = req.body.username;
        	req.session.admin = false;
        	res.redirect('/accueil');
    	}
	}
}

module.exports = Clients;
