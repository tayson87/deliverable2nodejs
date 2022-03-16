const { DataTypes } = require('sequelize');


//util
const { sequelize } = require('../util/database');

 const ActorMovie  = sequelize.define('actormovie', {
     id: {
         primaryKey: true,
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
     },
     actorId: {
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


 module.exports = { ActorMovie };