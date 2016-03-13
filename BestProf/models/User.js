/**
 * Created by Karine on 09/03/16.
 */
var Sequelize = require ('sequelize');
var db = require('./ConnectionDb.js');



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

//-------UNCOMMENT TO CREATE THE USER ADMIN -------

//
//Users.sync().then(function(){
//    var data = {
//        email_users : 'admin@admin.com',
//        password_users: 'bestprof',
//        role_users: 0
//    }
//
//    Users.create(data, {isNewRecord: false}).then(function(users){
//        console.dir(users.get());
//    })
//});

//-------------------------------------------------

//exports.create = function(email, password, role) {
//    var user = {
//        email_users: email,
//        password_users: password,
//        role_users: role
//    }
//
//    Users.create(user).then(function(users){
//        console.log(users.get())
//        return users.get();
//    })
//};


//
//exports.update = function(req,res){
//    Users.findById(req.params.id, function (err, user) {
//        if (err) throw err;
//
//        // change the users location
//        user.name = req.body;
//
//        // save the user
//        user.save(function (err) {
//            if (err) throw err;
//
//            console.log('User successfully updated!');
//        });
//        res.render('myProfil')
//    });
//};
//
//exports.delete = function(req, res){
//    Users.findById(req.params.id, function (err, user) {
//        if (err) throw err;
//
//        // delete him
//        user.remove(function (err) {
//            if (err) throw err;
//
//            console.log('User successfully deleted!');
//        });
//    });
//    res.render('deleteUser');
//};

exports.Db = Users;