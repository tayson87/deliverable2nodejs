const express = require('express');
const router = express.Router();

//controllers
const  { getActors,
     getActorsById, 
     createActors,
     updateActorsPach,
     deleteActors} = require('../controllers/actors.controllers');


router.get('/', getActors);

router.get('/:id', getActorsById);


router.post('/', createActors);


router.patch('/:id' , updateActorsPach);


router.delete('/:id' , deleteActors);

module.exports = { actorsRouter: router}; 