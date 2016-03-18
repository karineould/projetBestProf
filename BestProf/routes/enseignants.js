/**
 * Created by Karine on 18/03/16.
 */
var express = require('express');
var router = express.Router();
var AuthController = require('../controllers/AuthenticateController.js');
var FormController = require('../controllers/FormController.js');





router.get('/accueil', AuthController.auth, function(req, res, next) {
    res.render('accueil', {admin: req.session.admin});
});

router.get('/mon-form-creer', AuthController.auth, function(req, res, next) {
    res.render('formProfCreate', {admin: req.session.admin});
});

router.post('/mon-form-creer-check', AuthController.auth, FormController.checkForm,function(req, res, next) {
});




module.exports = router;