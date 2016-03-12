/**
 * Created by Karine on 11/03/16.
 */
var db = require('../models/ConnectionDb.js');
var User = require('../models/User.js');
var validate = require("validate.js");


exports.authenticate = function(email, password, role) {
    User.userDb.find({
        where: {
            email_users: email,
            password_users: password
        }
    }).then(function(result) {

        if (!result){
            return false;
        }else{
            return result.id_users;
        }


    });
};