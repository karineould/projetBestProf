/**
 * Created by Karine on 09/03/16.
 */
"use strict";

// DEFINE THE MODEL
module.exports = function(sequelize, DataTypes){

    var Form = sequelize.define('forms',{
        id_form: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_users_form :{
            type : DataTypes.INTEGER,
            required: true
        },
        matiere_form :{
            type : DataTypes.STRING
        },
        etude_form :{
            type : DataTypes.STRING
        },
        already_work_form :{
            type : DataTypes.STRING
        },
        time_work_form :{
            type : DataTypes.STRING
        },
        formation_form :{
            type : DataTypes.STRING
        },
        formation_time_form :{
            type : DataTypes.STRING
        },
        is_custom_form: {
            type : DataTypes.INTEGER
        }
    });

    return Form;
};

