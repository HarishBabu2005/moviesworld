import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();
const ConnectDB= async()=>{
    try{
    await mongoose.connect(process.env.MongoDB_URI);

    console.log("MongoDB connected...");}
    catch(error){
        console.error(error.message);
        process.exit(1);
    }
    
}
export default ConnectDB;