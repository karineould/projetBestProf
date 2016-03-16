/**
 * Created by Karine on 12/03/16.
 */
var validate = require("validate.js");
var models  = require('../models');


var signUpValidate = {
    Name: {
        presence: {
            message: "this field is require"
        }

    },
    Address: {
        presence: {
            message: "this field is require"
        }
    },
    Ville : {
        presence: {
            message: "this field is require"
        }

    },
    Cp : {
        presence: {
            message: "this field is require"
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
            message: "this field is require"
        }
        //numericality: {
        //    onlyInteger: true
        //}
    },
    Poste : {
        presence: {
            message: "this field is require"
        }
    },
    Email : {
        presence: {
            message: "this field is require"
        },
        email: {
            message: "doesn't look like a valid email"
        }
    },
    Password : {
        presence: {
            message: "this field is require"
        },
        length: {
            minimum: 6,
            message: "must be at least 6 characters"
        }
    },
    PasswordConfirm : {
        presence: {
            message: "this field is require"
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
        return res.render('signUpSchool', {reg_error: errorValidator, notFound: error});

    }else {
        var data = req.body;
        return res.render('signUpSchoolRecap', { dataForm : data});
    }
}

exports.signUp = function(req, res, next){

    console.log(req.body);
    var newUser = {
        email_users: req.body.Email,
        password_users: req.body.Password,
        role_users: 2
    };

    models.users.create(newUser/*, {
        include: [models.etablissement]
    }*/).then(function(user){

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
            }

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

}