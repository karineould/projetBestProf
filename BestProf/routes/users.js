var express = require('express');
var router = express.Router();
var User = require('../models/User.js');
var UserController = require('../controllers/UsersController.js');

/* GET users listing. */
router.get('/', function(req, res, next) {


  //User.create('test','test',1);
    UserController.authenticate('test','test',1);

  //res.redirect('/:id');
    res.send('users test');
});



router.get('/test', function(req, res, next) {

    console.log(req);
    //User.create('test','test',1);
    //var id = User.authenticate('test','test',1);

    //res.redirect('/:id');
    res.send('users test');
});
module.exports = router;
