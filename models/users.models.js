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
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    role: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'guest'
    },

      status: {
        type: DataTypes.STRING(10),
        allowNull: false, 
        defaultValue: 'active',  
     },
 });


 module.exports = { User };