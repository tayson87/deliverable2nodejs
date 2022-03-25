 //models
 const { Movie } = require('../models/movies.model');


 //util
 const { filterObj } = require ('../util/filterObject');
 
 
 exports.getMovies =  catchAsync ( async  (req, res,next) => {

    const movieDb = await movie.findAll({    
        where: { status: 'active' },
        include: [{ model: User}]
    });    
         
     res.status(200).json({
         status: 'success',
         data: {
           movieDb
         },
     });   
 });
 
 exports.getMoviesById =  catchAsync ( async  (req, res,next) => {
     
         const { id } = req.params;
 
        const movie = await  movie.findOne({ 
              where: {
                 id
             }
         });
 
         if(!movie) {
             res.status(404).json({
                 status: 'error',
                 message : 'not found with the  given ID '
             });
             return;
         }
         res.status (200).json({
             status: 'success',
             data: {
                 movie,
             },
         });      
 });
 
 exports.createMovies =  catchAsync ( async  (req, res,next) => {
    
         const { title, description, duration, genre, rating, img, actors } = req.body;     

         const newMovie = await Movie.create({
             title: title,
             description: description,
             duration: duration,
             genre: genre,
             rating: rating,
             img: img            
            });   
        res.status(201).json({
            status:'success',
            data: { newMovie},
        });           
      });
   
 
 exports.updateMoviesPach = catchAsync ( async  (req, res,next) => {
     
         const { id } = req.params;
         const data = filterObj(req.body, 'title', 'description', 'duration', 'genre' );
 
        const movie = await movie.findOne({
             where: { id }
         });   
            
         if(!movie) {
             res.status(404).json({
                 status: 'error',
                 message: 'cant update movie, invalide ID ',
             });
             return;
         }        
         await movie.update(
             { 
                 ...data
             });      
 
         res.status(204).json({
             status: 'success'
         });    
     });
 
 exports.deleteMovies = catchAsync ( async  (req, res,next) => {
     
         const { id } = req.params;
 
         const movie = await movie.findOne(
             {
                  where: {id}
                 });
 
         if(!movie ) {
             res.status(404).json({
                 status: 'error',
                 message: 'cant  delete movie invalid ID',
             });
             return;
         }
 
         actor.splice(userIndex, 1);      
     
         res.status(204).json({
             status: 'success'
         });   
 });