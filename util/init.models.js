//models
const {  Actor } = require('./models/actor.model');
const {  ActorMovie } = require('./models/actorsMovie.model');
const {  Movie } = require('./models/movies.model');
const {  Review } = require('./models/reviews.model');
const {  User } = require('./models/users.models');


const initModel = () => {
     User.hasMany(Review);
     Review.belongsTo(user);

     Movie.hasMany(Review);
     Review.belongsTo(Movie);

     Movie.belongsTo(Actor, {through: ActorMovie });
     Actor.belongsTo(Movie, {through: ActorMovie });


}

module.exports ={ initModel }