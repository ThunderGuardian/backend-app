import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; 
import express from 'express'
const app=express();



const connectDB=async()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",()=>{
            console.log("ERROR!!!: ",error);
            process.exit(1);
        });
        
        console.log(`Connection success! DB Host ${connectionInstance.connection.host}`);
         
    } catch (error) {
        console.log("ERROR!!: ",error)
    }
} 

export default connectDB