const express =  require('express');


//models
const {  Actor } = require('./models/actor.model');
const {  ActorMovie } = require('./models/actorsMovie.model');
const {  Movie } = require('./models/movies.model');
const {  Review } = require('./models/reviews.model');
const {  User } = require('./models/users.models');

//util
const { sequelize } = require('./util/database');

const app = express();
app.use(express.json());


sequelize.authenticate()
.then(() => console.log('database authenticate'))
.catch(error => console.log(error)); 

//Models relations
// Country.hasMany( City);
// City.belongsTo(Country);

// City.hasMany(Turn);
// Turn.belongsTo(City);

sequelize.sync()
.then(() => console.log('Database Synced'))
.catch(error => console.log(error))

app.listen(4000, () => {
    console.log('Express app running');

});


