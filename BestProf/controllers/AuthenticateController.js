/**
 * Created by Karine on 11/03/16.
 */
var session = require('express-session');
var validate = require("validate.js");
var models  = require('../models');



var connexionValidate = {
    username: {
        presence: true,
        email: {
            message: "doesn't look like a valid email"
        }
    },
    password: {
        presence: true,
        length: {
            minimum: 6,
            message: "must be at least 6 characters"
        }
    }
};

// Authentication and Authorization Middleware
exports.auth = function(req, res, next) {
    console.log(req.session);
    if (req.session && req.session.user)
        return next();
    else
        return res.send('auth failed');
};


exports.signIn = function(req, res, next) {
    console.log(req.body);

    var errorValidator = validate(
        {
            username: req.body.username,
            password: req.body.password

        }, connexionValidate);

    var error = false;

    //console.log(errorValidator);
    if (errorValidator){

        error = 'Erreur de saisie ! ';
        return res.render('connexion', {reg_error: errorValidator, notFound: error});

    }else{

        models.users.find({
            where: {
                email_users: req.body.username,
                password_users: req.body.password
            }
        }).then(function(result) {

            error = 'Email ou password introuvable !';
            if (!result){
                return res.render('connexion', {notFound: error});
            }else{
                if (req.body.username == result.email_users || req.body.password == result.password_users) {
                    req.session.user = result.id_users;
                    req.session.admin = result.role_users;
                    next();
                }else{
                    return res.render('connexion', {notFound: error});
                }
            }
        });
    }

};


exports.logout = function(req, res, next){
    console.log(req.session);
    req.session.destroy();
    return res.redirect('/');
};