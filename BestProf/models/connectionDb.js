/**
 * Created by Karine on 09/03/16.
 */
var Sequelize = require('sequelize');



var db = new Sequelize('BestProf', 'root', 'root', {
    dialect : 'mysql',
    port: 8889,
    host: 'localhost'
});


// load models
//var models = [
//    'users'
//];

//models.forEach(function(model) {
//    module.exports[model] = db.import(__dirname + '/' + model);
//});


// export connection
module.exports.sequelize = db;
