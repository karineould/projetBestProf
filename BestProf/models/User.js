/**
 * Created by Karine on 09/03/16.
 */
"use strict";

// DEFINE THE MODEL
module.exports = function(sequelize, DataTypes){

    var User = sequelize.define('users',{
        id_users: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email_users : {
            type : DataTypes.STRING
        },
        password_users: {
            type : DataTypes.STRING
        },
        role_users: DataTypes.INTEGER
    }/*, {
        classMethods: {
            associate: function(models) {
                User.hasMany(models.etablissement);
            }
        }
    }*/);

    return User;
};

//var Users = sequelize.define('users',{
//    id_users: {
//        type: Sequelize.INTEGER,
//        primaryKey: true,
//        autoIncrement: true
//    },
//    email_users : {
//        type : Sequelize.STRING
//    },
//    password_users: {
//        type : Sequelize.STRING
//    },
//    role_users: Sequelize.INTEGER
//});
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
//
//var UserModel = {
//    create: function (req, res) {
//        var user = {
//            email_users: req.body.email,
//            password_users: req.body.password,
//            role_users: req.body.role
//        }
//        Users.create(user).then(function (users) {
//            return users.get();
//        });
//        console.log('email : ' + req.body.email);
//        console.log('email : ' + req.body.password);
//        console.log('email : ' + req.body.role);
//    },
//
//    update: function (req, res) {
//        Users.findById(req.params.id, function (err, user) {
//            if (err) throw err;
//
//            // change the users location
//            user.name = req.body;
//
//            // save the user
//            user.save(function (err) {
//                if (err) throw err;
//
//                console.log('User successfully updated!');
//            });
//            //res.render('myProfil') : Renvoyer sur la page "Mon profil"
//        });
//    },
//    delete: function (req, res) {
//        Users.findById(req.params.id, function (err, user) {
//            if (err) throw err;
//
//            // delete him
//            user.remove(function (err) {
//                if (err) throw err;
//
//                console.log('User successfully deleted!');
//            });
//        });
//        //res.render('deleteUser'); : Renvoyer sur la page "DeleteUser"
//    },
//    checkConnexion: function(req, res){
//
//        //model.
//        Users.find({
//            where: {
//                email_users: req.body.username,
//                password_users: req.body.password
//            }
//        }).then(function(result) {
//            // console.log(result);
//            return result;
//        });
//    }
//
//};
