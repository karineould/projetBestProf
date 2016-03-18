/**
 * Created by Karine on 18/03/16.
 */
var express = require('express');
var router = express.Router();
var AuthController = require('../controllers/AuthenticateController.js');
var OffreController = require('../controllers/OffresController.js');





router.get('/accueil', AuthController.auth, function(req, res, next) {
    res.render('accueil', {admin: req.session.admin});
});




module.exports = router;