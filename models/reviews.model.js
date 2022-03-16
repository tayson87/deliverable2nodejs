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
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    userId: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    movieId: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

      status: {
        type: DataTypes.STRING(255),
        allowNull: false, 
        defaultValue: 'active',  
     },
 });


 module.exports = { Review };