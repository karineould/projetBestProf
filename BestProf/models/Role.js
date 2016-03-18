///**
// * Created by Karine on 09/03/16.
// */
///**
// * Created by Karine on 09/03/16.
// */
//var Sequelize = require ('sequelize');
//var db = require('./ConnectionDb.js');
//
//
//
'use strict';

module.exports = function(sequelize, DataTypes){

    var Role = sequelize.define('roles',{
        id_roles: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name_roles : {
            type : DataTypes.STRING
        }
    });
    return Role;

}
//// DEFINE THE MODEL

//
//
//Roles.sync().then(function(){
//    var data = {
//        id_roles : 0,
//        name_roles: 'admin'
//    }
//
//    Roles.create(data).then(function(roles){
//        console.dir(roles.get());
//    })
//});
