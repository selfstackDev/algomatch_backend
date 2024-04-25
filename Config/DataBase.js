import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()


const mongoDbConnect =()=>{
    mongoose.connect(process.env.DB)
    .then(()=> console.log("MongoDB Connected"))
    .catch((Error)=> console.log(Error))
}


export default mongoDbConnect;