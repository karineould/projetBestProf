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
    },
    Competence: {
        presence: true
    },
    TypeContrat: {
        exclusion: {
            within: {"0": ""}
        }
    },
    Experience: {
        exclusion: {
            within: {"0": ""}
        }
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


exports.createOffre = function(req, res, next){

    var newOffre = {
        //id_users_offre :,
        //id_form_offre : ,
        //title_offre :,
        //description_offre : ,
        //competence_offre : ,
        //contrat_offre : ,
        //niveau_offre :
    };

    models.offres.create(newOffre).then(function(offre){

        var error = false;

        if (offre.get('id_offre')){
            //console.log(req.body.Birth);
            //var newClient = {
            //
            //};
            //
            //models.clients.create(newClient).then(function(client){
            //
            //    if (!client.get('id_clients')){
            //        error = 'error clients';
            //    }
            //
            //});

        }else{
            error = 'error user';
        }

        res.render('signUpDone', { errorDb: error});
    }).catch(function(err){
        console.log(err);
    });

}