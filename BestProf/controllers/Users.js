var User = require('../models/User.js');
var Sequelize = require ('sequelize');

var Users = {
	create: function(req, res){
		var user = {
        	email_users: req.body.email,
        	password_users: req.body.password,
        	role_users: req.body.role
    	}
    	User.create(user).then(function(users){
    		return users.get();
    	});
    	console.log('email : ' + req.body.email);
    	console.log('email : ' + req.body.password);
    	console.log('email : ' + req.body.role);
	},

	update: function(req,res){
		User.findById(req.params.id, function (err, user) {
            if (err) throw err;

            // change the users location
            user.name = req.body;

            // save the user
            user.save(function (err) {
                if (err) throw err;

                console.log('User successfully updated!');
            });
            //res.render('myProfil') : Renvoyer sur la page "Mon profil"
        });
	},
	delete: function(req,res){
		User.findById(req.params.id, function (err, user) {
            if (err) throw err;

            // delete him
            user.remove(function (err) {
                if (err) throw err;

                console.log('User successfully deleted!');
            });
        });
    //res.render('deleteUser'); : Renvoyer sur la page "DeleteUser"
	},
	authenticate: function(req,res){
		User.find({
        where: {
            email_users: req.body.email,
            password_users: req.body.password
        }
    }).then(function(result) {

        if (!result){
            return false;
        }else{
            return result.id_users;
        }

    });
    res.redirect('http://localhost:3000');
	}
}

module.exports = Users;