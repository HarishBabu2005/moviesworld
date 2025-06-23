import Movie from "../models/movie.models.js";

export const movieview=async(req,res)=>{
    try {
        const movieread=await Movie.find()
        res.json(movieread)
    } catch (error) {
        res.status(500).json({message : error.message})
    } 
}
export const moviecreate=async(req,res)=>{
  
    const newMovie=new Movie({
        title : req.body.title,
        desc : req.body.desc
    })
    try {
        const movie=await newMovie.save();
        return res.status(201).json(movie)
    } catch (error) {
        return res.status(400).json({message:error.message});
    }
  
    
}
export const movieDetail=async(req,res)=>{
    try{
    const getmovie=await Movie.findById(req.params.id)
    
    if(getmovie==null){
        res.status(404).json({message:"cannot find this movie"})
    }
    else{
        res.json(getmovie);
    }
}
    catch(error){
        res.status(500).json({message :error.message})
    }
}
export const movieupdate=async(req,res)=>{
    try{
    const moviechange=await Movie.findOneAndUpdate({_id:req.params.id},{
        title: req.body.title,
        desc: req.body.desc
    },{
        new:true
    })
    res.status(200).json(moviechange)
}
    catch(error){
        res.status(404).json({message:error.message})
    }
}
export const moviedelete=async(req,res)=>{
    try{
        await Movie.deleteOne({_id:req.params.id});
        res.json({message: "movie deleted succesfully"})
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}