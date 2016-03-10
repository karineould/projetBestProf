var express = require('express');
var router = express.Router();
var User = require('../models/users.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

    console.log(req);
  //User.create('test','test',1);
  //var id = User.authenticate('test','test',1);

  //res.redirect('/:id');
    res.send('users Page');
});

module.exports = router;
