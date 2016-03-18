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


exports.createForm = function(req, res, next){


    var newForm = {

        id_users_form :req.session.user,
        matiere_form : req.body.matiere_form,
        etude_form : req.body.etude_form,
        already_work_form : req.body.already_work_form,
        time_work_form : req.body.time_work_form,
        formation_form : req.body.formation_form,
        formation_time_form : req.body.formation_time_form,
        motivation_form : req.body.motivation_form,
        competence_form : req.body.competence_form
    };

    console.log(newForm);

    models.forms.create(newForm).then(function(form){

        var error = false;

        if (form){
            res.redirect('/enseignants/mon-profil');

        }else{
            error = 'error form';
            res.render('formCreateError', { errorDb: error});
        }

    }).catch(function(err){
        var error = 'error form';
        res.render('formCreateError', { errorDb: error});
        console.log(err);
    });

};