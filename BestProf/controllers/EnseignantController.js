/**
 * Created by Karine on 15/03/16.
 */
/**
 * Created by Karine on 12/03/16.
 */
var validate = require("validate.js");
var models  = require('../models');


var signUpValidate = {
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
    Birth: {
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
    Phone : {
        presence: {
            message: "champs requis"
        }
    },
    Email : {
        presence: {
            message: "champs requis"
        },
        email: {
            message: "doesn't look like a valid email"
        }
    },
    Password : {
        presence: {
            message: "champs requis"
        },
        length: {
            minimum: 6,
            message: "must be at least 6 characters"
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
    console.log(req.body);
    var errorValidator = validate(req.body, signUpValidate);

    console.log(errorValidator);
    var error = false;

    if (errorValidator){

        error = 'Erreur de saisie ! ';
        return res.render('signUpProf', {reg_error: errorValidator, notFound: error,  dataForm: req.body});

    }else {

        models.users.find({
            where: {
                email_users: req.body.Email
            }
        }).then(function(result) {

            if (result){

                errorValidator = { Email: 'Email déjà existant'};
                return res.render('signUpProf', {reg_error: errorValidator, notFound: error, dataForm: req.body});
            }else{

                return res.render('signUpProfRecap', { dataForm : req.body});
            }
        }).catch(function(errors) {
            console.log(errors);
        });
    }
};

exports.signUp = function(req, res, next){

    var newUser = {
        email_users: req.body.Email,
        password_users: req.body.Password,
        role_users: 1
    };

    models.users.create(newUser).then(function(user){

        var error = false;

        if (user.get('id_users')){
            console.log(req.body.Birth);
            var newClient = {
                id_users_client : parseInt(user.get('id_users')),
                lastName_client: req.body.Lastname,
                firstName_client: req.body.Firstname,
                birthday_client: req.body.Birth,
                ville_client: req.body.Ville,
                cp_client: req.body.Cp,
                telephone_client: req.body.Phone
            };

            models.clients.create(newClient).then(function(client){

                if (!client.get('id_clients')){
                    error = 'error clients';
                }

            });

        }else{
            error = 'error user';
        }

        res.render('signUpDone', { errorDb: error});
    });

}