const { DataTypes } = require('sequelize');


//util
const { sequelize } = require('../util/database');

 const User = sequelize.define('user', {
     id: {
         primaryKey: true,
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
     },
     userName: {
         type: DataTypes.STRING(255),
         allowNull: false,
     },

     email: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    role: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

      status: {
        type: DataTypes.STRING(255),
        allowNull: false, 
        defaultValue: 'active',  
     },
 });


 module.exports = { User };