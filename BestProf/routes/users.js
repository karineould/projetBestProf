var express = require('express');
var router = express.Router();
//var User = require('../models/User.js');
var AuthController = require('../controllers/AuthenticateController.js');

/* GET users listing. */
router.get('/', AuthController.auth, function(req, res, next) {

        res.render('accueil', {admin: req.session.admin});

});



router.get('/test', function(req, res, next) {

    console.log(req);
    //User.create('test','test',1);
    //var id = User.authenticate('test','test',1);

    //res.redirect('/:id');
    res.send('users test');
});
module.exports = router;
