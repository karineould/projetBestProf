/**
 * Created by Karine on 09/03/16.
 */
var Sequelize = require('sequelize');



var db = new Sequelize('BestProf', 'root', 'root', {
    dialect : 'mysql',
    port: 3306,
    host: 'localhost'
});

// export connection
module.exports.sequelize = db;
