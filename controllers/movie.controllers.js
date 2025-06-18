export const movieview=(req,res)=>{
    res.send("hi")
}
export const moviecreate=(req,res)=>{
   console.log(req.body)
   return res.json(req.body);
    
}
export const movieupdate=(req,res)=>{
    res.send("i am modifier")
}
export const moviedelete=(req,res)=>{
    res.send("i am remover")
}