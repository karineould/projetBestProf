/**
 * Created by Karine on 11/03/16.
 */
var session = require('express-session');



// Authentication and Authorization Middleware
exports.auth = function(req, res, next) {
    //console.log(req.session.admin);
    if (req.session && req.session.user === "amy")
        return next();
    else
        return res.render(403);
};

exports.signIn = function(req, res, next) {

    if (!req.body.username || !req.body.password) {
        res.send('login failed');
    } else if (req.body.username == 'amy' || req.body.password == 'test') {
        req.session.user = 'amy';
        req.session.admin = true;
        next();
    }
};


exports.logout = function(req, res, next){
    req.session.destroy();
};