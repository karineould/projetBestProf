var express = require('express');
var router = express.Router();
var AuthController = require('../controllers/AuthenticateController.js');
var OffreController = require('../controllers/OffresController.js');

/* GET users listing. */
router.get('/accueil', AuthController.auth, function(req, res, next) {
    res.render('accueil', {admin: req.session.admin});
});

router.get('/mes-offres-creer', function(req, res, next) {
    res.render('offreCreate', {admin: req.session.admin});
});

router.post('/mes-offres-creer-check', OffreController.checkCreate, function(req, res, next) {
});

router.get('/mes-offres-creer-done', function(req, res, next) {

    console.log(req);
    //User.create('test','test',1);
    //var id = User.authenticate('test','test',1);

    //res.redirect('/:id');
    res.send('users test');
});
module.exports = router;
