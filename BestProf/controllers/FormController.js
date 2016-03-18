/**
 * Created by Karine on 18/03/16.
 */
var validate = require("validate.js");
var models  = require('../models');


var createFormValidate = {
    matiere_form: {
        presence: true
    },
    etude_form: {
        presence: true
    },
    motivation_form:{
        presence: true
    },
    competence_form: {
        presence: true
    },
    already_work_form: {
        presence: true
    },
    formation_form: {
        presence: true
    }
};


exports.checkForm = function(req, res, next){

    var errorValidator = validate(req.body, createFormValidate);
    console.log(req.body);

    console.log(errorValidator);

    var error = false;

    if (errorValidator){

        error = 'Champs obligatoire !';

        res.render('formProfCreate', {admin: req.session.admin, reg_error: errorValidator, notFound: error, dataForm: req.body});

    }else{

        res.render('formRecap', {admin: req.session.admin, dataForm: req.body});

    }


};