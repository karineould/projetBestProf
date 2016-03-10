/**
 * Created by Karine on 09/03/16.
 */
var Sequelize = require ('sequelize');
var db = require('./connectionDb.js');



// DEFINE THE MODEL
var Users = db.sequelize.define('users',{
    id_users: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email_users : {
        type : Sequelize.STRING
    },
    password_users: {
        type : Sequelize.STRING
    },
    role_users: Sequelize.INTEGER
});

//
//Users.sync().then(function(){
//    var data = {
//        email_users : 'k.oudlbraham@ynov.com',
//        password_users: 'bestprof',
//        role_users: 0
//    }
//
//    Users.create(data).then(function(users){
//        console.dir(users.get());
//    })
//});


// Create new users in your database and return its id
exports.create = function(email, password, role) {
    var user = {
        email_users: email,
        password_users: password,
        role_users: role
    }

    Users.create(user).then(function(users){
        return users.get();
    })
};


exports.authenticate = function(email, password, role) {
    Users.find({
        where: {
            email_users: email,
            password_users: password
        }
    }).then(function(result) {

        if (!result){
            return false;
        }else{
            return result.id_users;
        }


    });
};

