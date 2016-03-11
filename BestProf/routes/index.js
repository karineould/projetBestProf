var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');

router.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

router.use(bodyParser.urlencoded({ extended: false }));

// Authentication and Authorization Middleware
var auth = function(req, res, next) {
    //console.log(req.session.admin);
    if (req.session && req.session.user === "amy")
        return next();
    else
        return res.render(403);
};

// Login endpoint
router.post('/login', function (req, res) {
    if (!req.body.username || !req.body.password) {
        res.send('login failed');
    } else if(req.body.username == 'amy' || req.body.password == 'test') {
        req.session.user = 'amy';
        req.session.admin = true;
        res.redirect('/accueil');
    }
});

// Logout endpoint
router.get('/logout', function (req, res) {
    req.session.destroy();
    res.send("logout success!");
});

/* GET home page. */
router.get('/', function(req, res) {


  res.render('index', { title: 'Express' });
});

router.get('/connexion', function (req,res){

    res.render('connexion', { type: 'prof'});

});

router.get('/accueil', auth,function (req,res){

    res.render('accueil', { type: 'prof'});
});

module.exports = router;
