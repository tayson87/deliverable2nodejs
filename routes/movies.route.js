const express = require('express');
const router = express.Router();

//controllers
const  { getMovies,
     getMoviesById, 
     createMovies,
     updateMoviesPach,
     deleteMovies} = require('../controllers/movies.controllers');


router.get('/', getMovies);

router.get('/:id', getMoviesById);


router.post('/', createMovies);


router.patch('/:id' , updateMoviesPach);


router.delete('/:id' , deleteMovies);

module.exports = { moviesRouter: router}; 