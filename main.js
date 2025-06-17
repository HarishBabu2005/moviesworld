import express from "express";
const app=express();
const PORT=6969;
app.get("/",(req,res)=>{
    res.json({msg : "really me"})
})
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})