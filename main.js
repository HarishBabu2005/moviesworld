import express from "express";
import MovieRoute from "./routes/movies.routes.js";
import ConnectDB from "./lib/db.js";

const app=express();
const PORT=6969;
app.use(express.json());
app.use(express.urlencoded({extended : true}))
ConnectDB();
app.get("/",(req,res)=>{
    res.json({msg : "really me"})
})

app.use("/movies",MovieRoute);
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})