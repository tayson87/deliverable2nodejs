const bcrypt = require('bcryptjs');

//models
 const { User } = require('../models/users.models');


 //util
 const { filterObj } = require ('../util/filterObject');
 
 
 exports.getUser =  catchAsync ( async  (req, res,next) => {
     
         const userDb = await User.findAll()
     res.status(200).json({
         status: 'success',
         data: {
           userDb
         },
     });        
 });
 
 exports.getUserById =  catchAsync ( async  (req, res,next) => {
     
         const { id } = req.params;
 
        const user = await  user.findOne({ 
              where: {
                 id
             }
         });
 
         if(!user) {
             res.status(404).json({
                 status: 'error',
                 message : 'not found with the  given ID '
             });
             return;
         }
         res.status (200).json({
             status: 'success',
             data: {
                 user,
             },
         });
     });
 
 exports.createUsers =   catchAsync ( async  (req, res,next) => {
     
         const { userName, email, password,  } = req.body;
         
         const  salt = await bcrypt.genSalt(12);
         const hashedPassword =  await bcrypt.hash(password, salt);
 
         const newUser = await User.create({
            userName: userName,
            email: email,
            password: hashedPassword,            
            });   

           newUser.password = undefined;

        res.status(201).json({
            status:'success',
            data: { newUser},
        });          
      });
   
 
 exports.updateUsersPach =  catchAsync ( async  (req, res,next) => {
    
         const { id } = req.params;
         const data = filterObj(req.body, 'userName', 'email' );
 
        const user = await user.findOne({
             where: { id }
         });   
            
         if(!user) {
             res.status(404).json({
                 status: 'error',
                 message: 'cant update user, invalide ID ',
             });
             return;
         }        
         await user.update(
             { 
                 ...data
             });      
 
         res.status(204).json({
             status: 'success'
         });       
 });
 
 exports.deleteUsers =  catchAsync ( async  (req, res,next) => {
     
         const { id } = req.params;
 
         const user = await user.findOne(
             {
                  where: {id}
                 });
 
         if(!user ) {
             res.status(404).json({
                 status: 'error',
                 message: 'cant  delete user  invalid ID',
             });
             return;
         }
 
         user.splice(userIndex, 1);     
     
         res.status(204).json({
             status: 'success'
         });    
     });