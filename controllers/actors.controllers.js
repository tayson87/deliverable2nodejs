 //models
 const { Actor } = require('../models/actor.model');


 //util
 const { filterObj } = require ('../util/filterObject');
 
 
 exports.getActors = catchAsync ( async  (req, res,next) => {
     
         const actorDb = await Actor.findAll()
     res.status(200).json({
         status: 'success',
         data: {
           actorDb
         },
     });
    });

 
 exports.getActorsById =catchAsync ( async  (req, res,next) => {
     
         const { id } = req.params;
 
        const actor = await  actor.findOne({ 
              where: {
                 id
             }
         });
 
         if(!actor) {
             res.status(404).json({
                 status: 'error',
                 message : 'not found with the  given ID '
             });
             return;
         }
         res.status (200).json({
             status: 'success',
             data: {
                 actor,
             },
         });  
 });
 
 exports.createActors = catchAsync ( async  (req, res,next) => {
     
         const { name } = req.body;
 
         const newActor = await Actor.create({
             name: name,            
            });   
        res.status(201).json({
            status:'success',
            data: { newActor},
        });           
     });
   
 
 exports.updateActorsPach =catchAsync ( async  (req, res,next) => {
     
         const { id } = req.params;
         const data = filterObj(req.body, 'name' );
 
        const actor = await actor.findOne({
             where: { id }
         });   
            
         if(!actor) {
             res.status(404).json({
                 status: 'error',
                 message: 'cant update actor, invalide ID ',
             });
             return;
         }        
         await actor.update(
             { 
                 ...data
             });      
 
         res.status(204).json({
             status: 'success'
         });       
 });
 
 exports.deleteActors = catchAsync ( async  (req, res,next) => {
     
         const { id } = req.params;
 
         const actor = await actor.findOne(
             {
                  where: {id}
                 });
 
         if(!actor ) {
             res.status(404).json({
                 status: 'error',
                 message: 'cant  delete actor invalid ID',
             });
             return;
         }
 
         await actor.destroy();      
     
         res.status(204).json({
             status: 'success'
         });
     });

    //  cambios  en  propiedades  y en  el delete  con la funcion  soft 