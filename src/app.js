import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

//Limit to the json data from form
app.use(express.json({limit:"16kb"}))

//Accept URL data
app.use(express.urlencoded({extended:true,limit:"16kb"}))


//Store file/folder in a public assest ie in the public folder
app.use(express.static("public"))

//Cookies config
app.use(cookieParser())


export {app}