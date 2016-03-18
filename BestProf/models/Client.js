/**
* Created by Karine on 09/03/16.
*/
//var Sequelize = require ('sequelize');
//var db = require('./ConnectionDb.js');

module.exports = function(sequelize, DataTypes){
    var Client = sequelize.define('clients', {
        id_client: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_users_client: {
            type: DataTypes.INTEGER,
            required: true
        },
        lastName_client: {
            type: DataTypes.STRING,
            required: true
        },
        firstName_client: {
            type: DataTypes.STRING,
            required: true
        },
        birthday_client: {
            type: DataTypes.STRING,
            required: true
        },
        ville_client: {
            type: DataTypes.STRING,
            required: true
        },
        cp_client: {
            type: DataTypes.STRING,
            required: true
        },
        telephone_client: {
            type: DataTypes.INTEGER
        },
        id_form_client: {
            type: DataTypes.INTEGER
        }
    }/*,{
        classMethods: {
            associate: function(models) {
                Client.belongsTo(models.users, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        name :'id_users_client',
                        allowNull: false
                    }
                });
            }
        }
    }*/);
    return Client;

}


//var Clients = db.sequelize.define('clients',{
//    id_clients: {
//        type: sequelize.INTEGER,
//        primaryKey: true,
//        autoIncrement: true
//    },
//    id_users_client : {
//        type : sequelize.INTEGER,
//        required: true
//    },
//    lastName_client: {
//        type: sequelize.STRING,
//        required: true
//    },
//    firstName_client: {
//        type: sequelize.STRING,
//        required: true
//    },
//    birthday_client: {
//        type: sequelize.DATE,
//        required: true
//    },
//    ville_client: {
//        type: sequelize.STRING,
//        required: true
//    },
//    cp_client: {
//        type: sequelize.STRING,
//        required: true
//    },
//    telephone_client: {
//        type: sequelize.INTEGER
//    }
//});

//Clients.sync({logging: console.log}).then(function(req,res){
//    var Data = {
//        //id_clients: 0,
//
//        username: req.body.username,
//        name_Client: req.body.name,
//        firstName_Client: req.body.firstName,
//        birthday_Client: req.body.birthday,
//        ville_Client: req.body.city,
//        cp_Client: req.body.cp,
//        telephone_Client: req.body.telephone,
//
//        id_roles : 1,
//        name_roles: 'Professeur'
//    }
//
//    res.send('Un client s\'est inscrit!!!');
//});
