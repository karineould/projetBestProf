/**
* Created by Karine on 09/03/16.
*/

'use strict';

module.exports = function(sequelize, DataTypes){

    var Etablissement = sequelize.define('etablissement',{
        id_etablissement: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_users_etablissement: {
            type : DataTypes.INTEGER
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

};