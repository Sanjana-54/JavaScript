import exp from 'express';
import {config} from 'dotenv';
import { connect } from "mongoose";
import {userApp} from "./APIs/userAPI.js";
import {adminApp} from "./APIs/adminAPI.js";
import {authorApp} from "./APIs/authorAPI.js";
import {commonApp} from "./APIs/commonAPI.js";
import cookieParser from 'cookie-parser';
config();

//create express app
const app=exp();

//add cookie parser middleware
app.use(cookieParser())

//body parser middleware
app.use(exp.json());

//path level middlewares
app.use("/user-api",userApp);
app.use("/author-api",authorApp)
app.use("/admin-api",adminApp);
app.use("/common-api",commonApp)

//connect to db
const connectDb=async()=>{
  try{
    await connect(process.env.DB_URL);
    console.log("DB server connected");
    //assign port
    const port=process.env.PORT || 5000;
    app.listen(port,()=>console.log(`server listening to ${port}..`));
  }catch(err){
        console.log("error in db connect",err);
    }
};


connectDb();

//to handle invalid path
app.use((req,res,next)=>{
  console.log(req.url);
  res.status(404).json({ message:`path ${req.url} is invalid`});
})

//error handling middleware
app.use((err, req, res, next) => {
  //ValidationError
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  //CastError
  if (err.name === "CastError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
//send server side error
  res.status(500).json({ message: "error occurred", error:err.message});
});