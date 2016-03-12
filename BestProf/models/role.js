var Sequelize = require ('sequelize');
var db = require('./ConnectionDb.js');



// DEFINE THE MODEL
var Roles = db.sequelize.define('roles',{
    id_roles: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name_roles : {
        type : Sequelize.STRING
    }
});


Roles.sync().then(function(){
    var data = {
        id_roles : 0,
        name_roles: 'admin'
    }

    Roles.create(data).then(function(roles){
        console.dir(roles.get());
    })
});