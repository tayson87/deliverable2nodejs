const { DataTypes } = require('sequelize');


//util
const { sequelize } = require('../util/database');

 const Movie  = sequelize.define('movie', {
     id: {
         primaryKey: true,
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
     },
     title: {
         type: DataTypes.STRING(255),
         allowNull: false,
     },

     description : {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    duration: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    rating: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    img: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    genre: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

      status: {
        type: DataTypes.STRING(255),
        allowNull: false, 
        defaultValue: 'active',  
     },
 });


 module.exports = { Movie };