var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
var AuthController = require('../controllers/AuthenticateController.js');
var EtablissementController = require('../controllers/EtablissementController.js');

router.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

router.use(bodyParser.urlencoded({ extended: false }));


// Login endpoint
router.post('/login', AuthController.signIn, function (req, res) {

    res.redirect('/accueil');
});

// Logout endpoint
router.get('/logout', AuthController.logout, function (req, res) {
    res.send("logout success!");
});

/* GET home page. */
router.get('/', function(req, res) {

    //console.log(req.param('id'));
  res.render('index', { title: 'Express' });
});

router.get('/connexion', function (req,res){

    res.render('connexion', { type: 'prof'});

});

router.get('/inscription', function (req,res){

    res.render('signUp');
});

router.get('/inscription-etablissement',function (req,res){

    res.render('signUpSchool');
});

router.get('/inscription-enseignant',function (req,res){

    //res.render('inscription', { type: 'prof'});
    res.send('prof');
});

router.post('/inscription-etablissement-check', EtablissementController.signUpcheck, function (req, res) {
});

router.post('/inscription-etablissement-done', EtablissementController.signUp, function (req, res) {
});


router.get('/accueil', AuthController.auth ,function (req,res){
    res.render('accueil');
});

router.get('/test', /*AuthController.auth ,*/function (req,res){
    res.render('view_profile_prof');
});

router.get('/test1',/* AuthController.auth ,*/function (req,res){
    res.render('view_profile_etablissement');
});

module.exports = router;
