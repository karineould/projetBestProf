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
    id_users_etablissement : {
        type : Sequelize.STRING
    },
    name_etablissement : {
        type : Sequelize.STRING
    },
    prenom_etablissement : {
        type : Sequelize.STRING
    },
    poste_etablissement : {
        type : Sequelize.STRING
    },
    address_etablissement : {
        type : Sequelize.STRING
    },
    ville_etablissement : {
        type : Sequelize.STRING
    },
    cp_etablissement : {
        type : Sequelize.STRING
    },
    phone_etablissement : {
        type : Sequelize.STRING
    },
    id_form_etablissement : {
        type : Sequelize.STRING
    }
});

//Etablissement.sync();


//Etablissement.sync().then(function(){
//    var data = {
//        id_roles : 0,
//        name_roles: 'admin'
//    }
//
//    Etablissement.create(data).then(function(etablissement){
//        console.dir(etablissement.get());
//    })
//});