var express = require('express');
var app = express();
var router = express.Router();
var session = require('express-session');

app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

// Authentication and Authorization Middleware
var auth = function(req, res, next) {
    console.log(req.session.admin);
    if (req.session && req.session.user === "amy")
        return next();
    else
        return res.render(401);
};

// Login endpoint
app.get('/login', function (req, res) {
    console.log(req.query.username);
    console.log(req.query.password);
    if (!req.query.username || !req.query.password) {
        res.send('login failed');
    } else if(req.query.username === "amy" || req.query.password === "test") {
        req.session.user = "amy";
        req.session.admin = true;
        res.send("login success!");
    }
});

// Logout endpoint
app.get('/logout', function (req, res) {
    req.session.destroy();
    res.send("logout success!");
});

// Get content endpoint
app.get('/content', auth, function (req, res) {
    res.send("You can only see this after you've logged in.");
});

/* GET home page. */
router.get('/', function(req, res) {


  res.render('index', { title: 'Express' });
});

router.get('/connexion', function (req,res){

    res.render('connexion', { type: 'prof'});

});

router.get('/accueil', function (req,res){

    res.render('accueil', { type: 'prof'});
});

module.exports = router;
