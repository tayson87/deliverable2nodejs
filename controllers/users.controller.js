 //models
 const { User } = require('../models/users.models');


 //util
 const { filterObj } = require ('../util/filterObject');
 
 
 exports.getUser = async  (req, res) => {
     try {
         const userDb = await User.findAll()
     res.status(200).json({
         status: 'success',
         data: {
           userDb
         },
     }); 
     } catch (error) {
         console.log(error);
         
     }
         
 };
 
 exports.getUserById = async  (req, res) => {
     try {
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
     } catch (error) {
         console.log(error);
     }   
 };
 
 exports.createUsers =  async ( req, res) => {
     try {
         const { name } = req.body;
 
         const newUser = await User.create({
             name: name,            
            });   
        res.status(201).json({
            status:'success',
            data: { newUser},
        });           
     } catch (error) {
         console.log(error);
     }
 };
   
 
 exports.updateUsersPach = async  (req, res) => {
     try {
         const { id } = req.params;
         const data = filterObj(req.body, 'name' );
 
        const user = await user.findOne({
             where: { id }
         });   
            
         if(!city) {
             res.status(404).json({
                 status: 'error',
                 message: 'cant update city, invalide ID ',
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
     } catch (error) {
         console.log(error);
     }
    
 };
 
 exports.deleteUsers = async  (req, res) => {
     try {
         const { id } = req.params;
 
         const user = await user.findOne(
             {
                  where: {id}
                 });
 
         if(!user ) {
             res.status(404).json({
                 status: 'error',
                 message: 'cant  delete city invalid ID',
             });
             return;
         }
 
         await user.destroy();      
     
         res.status(204).json({
             status: 'success'
         });
     } catch (error) {
         console.log(error);
     }
    
 };