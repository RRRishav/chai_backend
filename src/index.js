import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
    path:"./.env"
})
import { DB_NAME } from "./constant.js";


(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connected to the database succesfully -> MONGODB");
    }catch(error){
        console.log("Error connecting to the database", error);
        process.exit(1);
    }
})()