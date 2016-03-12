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
    },

    name_etablissement:{type: Sequelize.STRING, required:true},
    name_Responsable:{type: Sequelize.STRING, required:true},
    firstName_Etablissement:{type:Sequelize.STRING, required: true},
    poste_Responsable:{type:Sequelize.STRING, required:true}
    ville_Etablissement:{type:Sequelize.STRING, required:true},
    cp_Etablissement:{type:Sequelize.STRING, required:true},
    address:{type:Sequelize.STRING, required:true},
    telephone_Etablissement:{type:Sequelize.INTEGER, required:true}
});


Etablissement.sync().then(function(){
    var data = {
        id_roles : 0,
        name_roles: 'admin',

        //id_etablissement:0,
        name_etablissement: req.body.name_etablissement,
        name_Responsable: req.body.name_Responsable,
        firstName_Etablissement: req.body.firstName_Etablissement,
        poste_Responsable: req.body.poste_Responsable,
        ville_Etablissement: req.body.ville,
        cp_Etablissement: req.body.cp,
        address: req.body.address,
        telephone_Etablissement: req.body.telephone_Etablissement,
    }

    Etablissement.create(data).then(function(etablissement){
        console.dir(etablissement.get());
    });
    res.send('Etablissement inscrit!');
});