const express =  require('express');


//models
const {  Actor } = require('./models/actor.model');
const {  ActorMovie } = require('./models/actorsMovie.model');
const {  Movie } = require('./models/movies.model');
const {  Review } = require('./models/reviews.model');
const {  User } = require('./models/users.models');



const app = express();
app.use(express.json());

module.exports = { app };

//Models relations
// Country.hasMany( City);
// City.belongsTo(Country);

// City.hasMany(Turn);
// Turn.belongsTo(City);






