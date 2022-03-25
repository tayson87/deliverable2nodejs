const express =  require('express');


const { usersRouter } = require('./routes/users.routes');
const { actorsRouter } = require('./routes/actors.routes');
const { moviesRouter } = require('./routes/movies.routes');

const app = express();
app.use(express.json());

//endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/actors', actorsRouter);
app.use('/api/v1/movies', moviesRouter);

module.exports = { app };







