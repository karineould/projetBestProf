var express = require('express');
var router = express.Router();
var AuthController = require('../controllers/AuthenticateController.js');
var OffreController = require('../controllers/OffresController.js');

/* GET users listing. */
router.get('/accueil', AuthController.auth, function(req, res, next) {
    res.render('accueil', {admin: req.session.admin});
});

router.get('/mes-offres-creer', AuthController.auth, function(req, res, next) {
    res.render('offreCreate', {admin: req.session.admin});
});

router.post('/mes-offres-creer-check', AuthController.auth, OffreController.checkOffre, function(req, res, next) {
});

router.post('/mes-offres-creer-done', AuthController.auth, OffreController.createOffre, function(req, res, next) {
});

router.get('/mes-offres-delete/:id',  AuthController.auth, OffreController.deleteOffre, function(req, res, next) {
});

router.get('/mes-offres-update/:id',  AuthController.auth, OffreController.RenderUpdateOffre, function(req, res, next) {
});

router.post('/mes-offres-update-check',  AuthController.auth, OffreController.checkOffre, function(req, res, next) {
});

router.post('/mes-offres-update',  AuthController.auth, OffreController.updateOffre, function(req, res, next) {
});

router.get('/mes-offres', AuthController.auth, OffreController.getAllOffre , function(req,res, next){
});

module.exports = router;
