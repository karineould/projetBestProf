var express = require('express');
var router = express.Router();
var User = require('../models/users.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

  User.create('test','test',1);

  res.send('respond with a resource');
});

module.exports = router;
