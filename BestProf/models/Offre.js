/**
 * Created by Karine on 16/03/16.
 */
"use strict";

// DEFINE THE MODEL
module.exports = function(sequelize, DataTypes){

    var Offre = sequelize.define('offres',{

        id_offre: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Id_users_offre :{
            type : DataTypes.INTEGER,
            required: true
        },
        id_form_offre : {
            type : DataTypes.INTEGER,
            required: true
        },
        title_offre : {
            type : DataTypes.STRING,
            required: true
        },
        description_offre : {
            type : DataTypes.STRING,
            required: true
        },
        competence_offre : {
            type : DataTypes.STRING
        },
        contrat_offre : {
            type : DataTypes.STRING
        },
        niveau_offre : {
            type : DataTypes.STRING
        }
    });

    return Offre;
};