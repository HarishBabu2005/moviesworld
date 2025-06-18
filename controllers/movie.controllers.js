import Movie from "../models/movie.models.js";

export const movieview=(req,res)=>{
    res.send("hi")
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
export const movieupdate=(req,res)=>{
    res.send("i am modifier")
}
export const moviedelete=(req,res)=>{
    res.send("i am remover")
}