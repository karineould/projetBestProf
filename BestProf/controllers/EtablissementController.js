/**
 * Created by Karine on 12/03/16.
 */
var validate = require("validate.js");
var db = require('../models/ConnectionDb.js');
var User = require('../models/Etablissement.js');


var connexionValidate = {
    etablissementName: {
        presence: true,
        //email: {
        //    message: "doesn't look like a valid email"
        //}
    },
    etablissementAddress: {
        presence: true,
        length: {
            minimum: 6,
            message: "must be at least 6 characters"
        }
    },
    etablissementVille : {

    },
    etablissementCp : {

    },
    userName : {

    },
    userLastname : {

    },
    etablissementPhone : {

    },
    userEmail : {

    },
    userPassword : {

    },
    userPasswordConfirm : {

    }
};


exports.signUp = function(req,res,next){

    console.log(req.body);
    console.log('recap');

}