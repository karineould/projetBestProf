/**
 * Created by Karine on 09/03/16.
 */
var Sequelize = require ('sequelize');
var db = require('./ConnectionDb.js');



// DEFINE THE MODEL
var Etablissement = db.sequelize.define('etablissement',{
    id_etablissement: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_roles : {
        type : Sequelize.STRING
    }
});


Etablissement.sync().then(function(){
    var data = {
        id_roles : 0,
        name_roles: 'admin'
    }

    Etablissement.create(data).then(function(etablissement){
        console.dir(etablissement.get());
    })
});