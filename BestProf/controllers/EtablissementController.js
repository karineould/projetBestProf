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

    User.userDb.create(newUser).then(function(user){
        console.log(user.get());
    });



    //Users.create(user).then(function(users){
    //
    //    return users.get();
    //})
    res.render('signUpSchoolDone');

}