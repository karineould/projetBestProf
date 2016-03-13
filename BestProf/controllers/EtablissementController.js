/**
 * Created by Karine on 12/03/16.
 */
var validate = require("validate.js");
var db = require('../models/ConnectionDb.js');
var Etablissement = require('../models/Etablissement.js');
var User = require('../models/User.js');


var connexionValidate = {
    etablissementName: {
        presence: {
            message: "doesn't look like a valid email"
        }

    },
    etablissementAddress: {
        presence: {
            message: "this field is require"
        }
    },
    etablissementVille : {
        presence: {
            message: "this field is require"
        }

    },
    etablissementCp : {
        presence: {
            message: "this field is require"
        }
    },
    etablissementFirstname : {
        presence: {
            message: "this field is require"
        }
    },
    etablissementLastname : {
        presence: {
            message: "this field is require"
        }
    },
    etablissementPhone : {
        presence: {
            message: "this field is require"
        }
        //numericality: {
        //    onlyInteger: true
        //}
    },
    etablissementPoste : {
        presence: {
            message: "this field is require"
        }
    },
    userEmail : {
        presence: {
            message: "this field is require"
        },
        email: {
            message: "doesn't look like a valid email"
        }
    },
    userPassword : {
        presence: {
            message: "this field is require"
        },
        length: {
            minimum: 6,
            message: "must be at least 6 characters"
        }
    },
    userPasswordConfirm : {
        presence: {
            message: "this field is require"
        },
        equality: "userPassword"
    }
};


exports.signUpcheck = function(req,res,next){

    var errorValidator = validate(
        {
            etablissementName: req.body.etablissementName,
            etablissementAddress: req.body.etablissementAddress,
            etablissementVille : req.body.etablissementVille,
            etablissementCp : req.body.etablissementCp,
            etablissementPoste : req.body.etablissementPoste,
            etablissementFirstname : req.body.etablissementFirstname,
            etablissementLastname : req.body.etablissementLastname,
            etablissementPhone : req.body.etablissementPhone,
            userEmail : req.body.userEmail,
            userPassword : req.body.userPassword,
            userPasswordConfirm :  req.body.userPasswordConfirm

        }, connexionValidate);

    console.log(errorValidator);
    var error = false;

    if (errorValidator){

        error = 'Erreur de saisie ! ';
        return res.render('signUpSchool', {reg_error: errorValidator, notFound: error});

    }else {
        var data = req.body;
        return res.render('signUpSchoolRecap', { dataForm : data});
    }
}

exports.signUp = function(req, res, next){


    var newUser = {
        email_users: req.body.userEmail,
        password_users: req.body.userPassword,
        role_users: parseInt(req.body.userRole)
    }

    User.Db.create(newUser).then(function(user){

        var error = false;

        if (user.get('id_users')){

            var newEtablissement = {
                id_users_etablissement : user.get('id_users'),
                name_etablissement : req.body.etablissementName,
                firstname_etablissement : req.body.etablissementFirstname,
                lastname_etablissement : req.body.etablissementLastname,
                poste_etablissement : req.body.etablissementPoste,
                address_etablissement : req.body.etablissementAddress,
                ville_etablissement : req.body.etablissementVille,
                cp_etablissement : req.body.etablissementCp,
                phone_etablissement : parseInt(req.body.etablissementPhone)
            }

            Etablissement.Db.create(newEtablissement).then(function(etablissement){

                if (!etablissement.get('id_etablissement')){
                    error = 'error etablissement';
                }

            });/*.catch(function (err) {
                error = err;
            });*/ //TODO VERIF

        }else{
            error = 'error user';
        }

        res.render('signUpSchoolDone', { errorDb: error});
    });/*.catch(function (err) {
     error = err;
     });*/ //TODO VERIF

}