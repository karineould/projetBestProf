/**
 * Created by Karine on 12/03/16.
 */
var validate = require("validate.js");
var models  = require('../models');


var signUpValidate = {
    Name: {
        presence: {
            message: "champs requis"
        }

    },
    Address: {
        presence: {
            message: "champs requis"
        }
    },
    Ville : {
        presence: {
            message: "champs requis"
        }

    },
    Cp : {
        presence: {
            message: "champs requis"
        }
    },
    Firstname : {
        presence: {
            message: "champs requis"
        }
    },
    Lastname : {
        presence: {
            message: "champs requis"
        }
    },
    Phone : {
        presence: {
            message: "champs requis"
        }
    },
    Poste : {
        presence: {
            message: "champs requis"
        }
    },
    Email : {
        presence: {
            message: "champs requis"
        },
        email: {
            message: "Entrez une adresse mail valide"
        }
    },
    Password : {
        presence: {
            message: "champs requis"
        },
        length: {
            minimum: 6,
            message: "Au moins 6 caractère"
        }
    },
    PasswordConfirm : {
        presence: {
            message: "champs requis"
        },
        equality: "Password"
    }
};


exports.signUpcheck = function(req,res,next){

    var errorValidator = validate(req.body, signUpValidate);

    console.log(errorValidator);
    var error = false;

    if (errorValidator){

        error = 'Erreur de saisie ! ';
        return res.render('signUpSchool', {reg_error: errorValidator, notFound: error, dataForm: req.body});

    }else {

        models.users.find({
            where: {
                email_users: req.body.Email
            }
        }).then(function(result) {

            if (result){
                errorValidator = { Email: 'Email déjà existant'};
                return res.render('signUpSchool', {reg_error: errorValidator, notFound: error, dataForm: req.body});
            }else{

                return res.render('signUpSchoolRecap', { dataForm : req.body});
            }
        }).catch(function(errors) {
            console.log(errors);
        });
    }
};

exports.signUp = function(req, res, next){

    console.log(req.body);
    var newUser = {
        email_users: req.body.Email,
        password_users: req.body.Password,
        role_users: 2
    };

    models.users.create(newUser).then(function(user){

        var error = false;
        console.log(user.get('id_users'));
        if (user.get('id_users')){

            var newEtablissement = {
                id_users_etablissement : parseInt(user.get('id_users')),
                name_etablissement : req.body.Name,
                firstname_etablissement : req.body.Firstname,
                lastname_etablissement : req.body.Lastname,
                poste_etablissement : req.body.Poste,
                address_etablissement : req.body.Address,
                ville_etablissement : req.body.Ville,
                cp_etablissement : req.body.Cp,
                phone_etablissement : req.body.Phone
            };

            models.etablissement.create(newEtablissement).then(function(etablissement){

                if (!etablissement.get('id_etablissement')){
                    error = 'error etablissement';
                }

            });

        }else{
            error = 'error user';
        }

        res.render('signUpDone', { errorDb: error});
    });

};