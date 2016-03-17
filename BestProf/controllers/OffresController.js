/**
 * Created by Karine on 16/03/16.
 */
var validate = require("validate.js");
var models  = require('../models');


var createOffreValidate = {
    Title: {
        presence: true
    },
    Description: {
        presence: true
    }
};


exports.checkCreate = function(req, res, next){

    var errorValidator = validate(req.body, createOffreValidate);

    console.log(errorValidator);
    var error = false;

    if (errorValidator){

        error = 'Champs obligatoire !';
        return res.render('offreCreate', {reg_error: errorValidator, notFound: error, dataForm: req.body});

    }else{

        res.render('offreCreateRecap', {admin: req.session.admin, dataForm: req.body});
    }

};