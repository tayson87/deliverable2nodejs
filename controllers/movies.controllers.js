 //models
 const { Movie } = require('../models/movies.model');


 //util
 const { filterObj } = require ('../util/filterObject');
 
 
 exports.getMovies = async  (req, res) => {
     try {
         const cityDb = await City.findAll()
     res.status(200).json({
         status: 'success',
         data: {
           cityDb
         },
     }); 
     } catch (error) {
         console.log(error);
         
     }
         
 };
 
 exports.getMoviesById = async  (req, res) => {
     try {
         const { id } = req.params;
 
        const city = await  city.findOne({ 
              where: {
                 id
             }
         });
 
         if(!city) {
             res.status(404).json({
                 status: 'error',
                 message : 'not found with the  given ID '
             });
             return;
         }
         res.status (200).json({
             status: 'success',
             data: {
                 city,
             },
         });
     } catch (error) {
         console.log(error);
     }   
 };
 
 exports.createMovies =  async ( req, res) => {
     try {
         const { name } = req.body;
 
         const newCity = await City.create({
             name: name,            
            });   
        res.status(201).json({
            status:'success',
            data: { newCity},
        });           
     } catch (error) {
         console.log(error);
     }
 };
   
 
 exports.updateMoviesPach = async  (req, res) => {
     try {
         const { id } = req.params;
         const data = filterObj(req.body, 'name' );
 
        const city = await city.findOne({
             where: { id }
         });   
            
         if(!city) {
             res.status(404).json({
                 status: 'error',
                 message: 'cant update city, invalide ID ',
             });
             return;
         }        
         await city.update(
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
 
 exports.deleteMovies = async  (req, res) => {
     try {
         const { id } = req.params;
 
         const city = await City.findOne(
             {
                  where: {id}
                 });
 
         if(!city ) {
             res.status(404).json({
                 status: 'error',
                 message: 'cant  delete city invalid ID',
             });
             return;
         }
 
         await city.destroy();      
     
         res.status(204).json({
             status: 'success'
         });
     } catch (error) {
         console.log(error);
     }
    
 };