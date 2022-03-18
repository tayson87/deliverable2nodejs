const express =  require('express');


//models




const app = express();
app.use(express.json());

module.exports = { app };

//Models relations
// Country.hasMany( City);
// City.belongsTo(Country);

// City.hasMany(Turn);
// Turn.belongsTo(City);






