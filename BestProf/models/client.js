var Sequelize = require ('sequelize');
var db = require('./ConnectionDb.js');

var Clients = db.sequelize.define('clients',{
	id_clients: {
		type: sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	username:{type: sequelize.STRING, required: true},
	name_Client: {type: sequelize.STRING, required: true},
	firstName_Client:{type: sequelize.STRING, required: true},
	birthday_Client: {type: sequelize.DATE, required: true},
	ville_Client: {type: sequelize.STRING, required: true},
	cp_Client: {type: sequelize.INTEGER, required: true},
	telephone_Client:{type: sequelize.INTEGER.UNSIGNED}
});

Clients.sync({logging: console.log}).then(function(req,res){
	var Data = {
		//id_clients: 0,
		
		username: req.body.username,
		name_Client: req.body.name,
		firstName_Client: req.body.firstName,
		birthday_Client: req.body.birthday,
		ville_Client: req.body.city,
		cp_Client: req.body.cp,
		telephone_Client: req.body.telephone,

		id_roles : 1,
        name_roles: 'Professeur'
	}

	res.send('Un client s\'est inscrit!!!');
});