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
    });
    return Client;

};

