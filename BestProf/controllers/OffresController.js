/**
 * Created by Karine on 16/03/16.
 */
var validate = require("validate.js");
var models  = require('../models');


var createOffreValidate = {
    title_offre: {
        presence: true
    },
    description_offre: {
        presence: true
    },
    competence_offre: {
        presence: true
    },
    contrat_offre: {
        exclusion: {
            within: {"0": ""}
        }
    },
    experience_offre: {
        exclusion: {
            within: {"0": ""}
        }
    }
};


exports.checkOffre = function(req, res, next){

    var errorValidator = validate(req.body, createOffreValidate);
    console.log(req.body);

    console.log(errorValidator);
    var error = false;

    if (errorValidator){

        error = 'Champs obligatoire !';

        if (req.body.id_offre){
             res.render('offreUpdate', {admin: req.session.admin, reg_error: errorValidator, notFound: error, dataForm: req.body, update: true});
        }else{
             res.render('offreCreate', {admin: req.session.admin, reg_error: errorValidator, notFound: error, dataForm: req.body});
        }


    }else{
        if (req.body.id_offre){
             res.render('offreRecap', {admin: req.session.admin, dataForm: req.body, update: true});
        }else{
             res.render('offreRecap', {admin: req.session.admin, dataForm: req.body});
        }

    }

};


exports.createOffre = function(req, res, next){

    var newOffre = {
        id_users_offre : req.session.user,
        title_offre : req.body.title_offre,
        description_offre : req.body.description_offre,
        competence_offre : req.body.competence_offre,
        contrat_offre : req.body.contrat_offre,
        experience_offre : req.body.experience_offre
    };

    console.log(newOffre);

    models.offres.create(newOffre).then(function(offre){

        var error = false;

        if (offre){
            res.redirect('/etablissements/mes-offres');

        }else{
            error = 'error offre';
            res.render('offreCreateError', { errorDb: error});
        }

    }).catch(function(err){
        var error = 'error offre';
        res.render('offreCreateError', { errorDb: error});
        console.log(err);
    });

};

exports.getAllOffre = function(req, res, next){

    models.offres.findAll({
        where: {
            id_users_offre: req.session.user
        }
    }).then(function(offres){

        var noResult = false;

        if (offres.length == 0){
            noResult = true;
            res.render('offre', {admin: req.session.admin, result : noResult});

        }else{
            res.render('offre', {admin: req.session.admin, result : noResult, dataOffres: offres});
        }

    }).catch(function(err){
        var error = 'error offre';
        res.render('offre', { errorDb: error});
        console.log(err);
    });
};

exports.deleteOffre = function(req, res, next){

    models.offres.destroy({
        where:{
            id_offre: parseInt(req.params.id)
        }
    }).then(function(offres){
        console.log(offres);
        res.redirect('/etablissements/mes-offres');
    });


};
exports.RenderUpdateOffre = function(req, res, next){

    models.offres.findOne({
        where: {
            id_offre: parseInt(req.params.id)
        }
    }).then(function(offres){

            console.log(offres.get());

            res.render('offreUpdate', {admin: req.session.admin, dataForm: offres.get()});
        });

};


exports.updateOffre = function(req, res, next){
    console.log(req.body);
    var update = {
        title_offre: req.body.title_offre,
        description_offre: req.body.description_offre,
        competence_offre: req.body.competence_offre,
        contrat_offre: req.body.contrat_offre,
        experience_offre : req.body.experience_offre
    };

    models.offres.update(
        update,
        { where : { id_offre : parseInt(req.body.id_offre)}}

    ).then(function(offre){
       console.log(offre);
        res.redirect('/etablissements/mes-offres');
    });

};
//offres.forEach(
//    function(inst){
//        dataOffre += inst.get();
//    }
//);