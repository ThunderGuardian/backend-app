//require('dotenv').config({path:'./env'});
import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path:'./.env'
});

connectDB()
.then(()=>{
    app.on("error",()=>{
        console.log("Error",error);
        throw error;
    })
    app.listen(process.env.PORT||8000,()=>{
        console.log(`App listening on port: ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("Mongo db connect failed", err)
}) 




// import express from "express"
// const app= express();
// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",()=>{
//             console.log("ERROR: ",error)
//         });

//         console.log("Connection success");
//         app.listen(process.env.PORT,()=>{
//             console.log(`App listening on port: ${process.env.PORT}`);
        
//         });

        
        
         
//     } catch (error) {
//         console.log("ERROR: ",error)
//     }
// })()
