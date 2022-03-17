const { DataTypes } = require('sequelize');


//util
const { sequelize } = require('../util/database');

 const Review  = sequelize.define('review', {
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

     comment: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

      status: {
        type: DataTypes.STRING(255),
        allowNull: false, 
        defaultValue: 'active',  
     },
 });


 module.exports = { Review };