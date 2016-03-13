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
    etablissementFirstName : {
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
    userEmail : {
        email: {
            message: "this field is require"
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


exports.signUp = function(req,res,next){

    var errorValidator = validate(
        {
            etablissementName: req.body.etablissementName,
            etablissementAddress: req.body.etablissementAddress,
            etablissementVille : req.body.etablissementVille,
            etablissementCp : req.body.etablissementCp,
            etablissementFirstName : req.body.etablissementFirstName,
            etablissementLastname : req.body.etablissementLastname,
            etablissementPhone : req.body.etablissementPhone,
            userEmail : req.body.userEmail,
            userPassword : req.body.userPassword,
            userPasswordConfirm :  req.body.userPasswordConfirm

        }, connexionValidate);


     var error = false;

    if (errorValidator){

        error = 'Erreur de saisie ! ';
        return res.render('signUpSchool', {reg_error: errorValidator, notFound: error});

    }else {
        User.create(req.body.userName, req.body.userEmail, req.body.userPassword, parseInt(req.body.userRole));

    }
    //console.log(req.body);
    //console.log('recap');

}