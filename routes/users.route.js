const express = require('express');
const router = express.Router();

//controllers
const  { getUsers,
     getUsersById, 
     createUsers,
     updateUsersPach,
     deleteUsers} = require('../controllers/users.controller');


router.get('/', getUsers);

router.get('/:id', getUsersById);


router.post('/', createUsers);


router.patch('/:id' , updateUsersPach);


router.delete('/:id' , deleteUsers);

module.exports = { usersRouter: router}; 