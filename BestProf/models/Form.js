/**
 * Created by Karine on 09/03/16.
 */
"use strict";

// DEFINE THE MODEL
module.exports = function(sequelize, DataTypes){

    var Form = sequelize.define('form',{
        id_form: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        value_form :{
            type : DataTypes.STRING
        },
        is_custom_form: {
            type : DataTypes.INTEGER
        }
    }/*,{
        classMethods: {
            associate: function(models) {
                Form.belongsTo(models.users, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        name :'id_users_form',
                        allowNull: false
                    }
                });
            }
        }
    }*/);

    return Form;
};


//User.hasMany(Picture, { foreignKey: 'uid' })

//{
//    classMethods: {
//        associate: function(models) {
//            User.hasMany(models.Task)
//        }
//    }

