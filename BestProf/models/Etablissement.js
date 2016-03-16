///**
// * Created by Karine on 09/03/16.
// */
//var Sequelize = require ('sequelize');
//var db = require('./ConnectionDb.js');
//
//
'use strict';

module.exports = function(sequelize, DataTypes){
    var Etablissement = sequelize.define('etablissement',{
        id_etablissement: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_etablissement : {
            type : DataTypes.STRING
        },
        firstname_etablissement : {
            type : DataTypes.STRING
        },
        lastname_etablissement : {
            type : DataTypes.STRING
        },
        poste_etablissement : {
            type : DataTypes.STRING
        },
        address_etablissement : {
            type : DataTypes.STRING
        },
        ville_etablissement : {
            type : DataTypes.STRING
        },
        cp_etablissement : {
            type : DataTypes.STRING
        },
        phone_etablissement : {
            type : DataTypes.STRING
        }
    }/*, {
        classMethods: {
            associate: function(models) {
                Etablissement.belongsTo(models.users, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        name :'id_users_etablissement',
                        allowNull: false
                    }
                });
            }
        }
    }*/);

    return Etablissement;

}
//
//// DEFINE THE MODEL
//var Etablissement = db.sequelize.define('etablissement',{
//    id_etablissement: {
//        type: Sequelize.INTEGER,
//        primaryKey: true,
//        autoIncrement: true
//    },
//    id_users_etablissement : {
//        type : Sequelize.STRING
//    },
//    name_etablissement : {
//        type : Sequelize.STRING
//    },
//    firstname_etablissement : {
//        type : Sequelize.STRING
//    },
//    lastname_etablissement : {
//        type : Sequelize.STRING
//    },
//    poste_etablissement : {
//        type : Sequelize.STRING
//    },
//    address_etablissement : {
//        type : Sequelize.STRING
//    },
//    ville_etablissement : {
//        type : Sequelize.STRING
//    },
//    cp_etablissement : {
//        type : Sequelize.STRING
//    },
//    phone_etablissement : {
//        type : Sequelize.STRING
//    },
//    id_form_etablissement : {
//        type : Sequelize.STRING
//    }
//});
//
//Etablissement.sync();
//
//
////Etablissement.sync().then(function(){
////    var data = {
////        id_roles : 0,
////        name_roles: 'admin'
////    }
////
////    Etablissement.create(data).then(function(etablissement){
////        console.dir(etablissement.get());
////    })
////});
//
//exports.Db = Etablissement;
