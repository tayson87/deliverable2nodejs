const { DataTypes } = require('sequelize');


//util
const { sequelize } = require('../util/database');

 const Actor = sequelize.define('actor', {
     id: {
         primaryKey: true,
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
     },
     name: {
         type: DataTypes.STRING(255),
         allowNull: false,
     },

     country: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    rating: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    age: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    profilePic: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

      status: {
        type: DataTypes.STRING(255),
        allowNull: false, 
        defaultValue: 'active',  
     },
 });


 module.exports = { Actor };