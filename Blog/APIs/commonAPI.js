import exp from "express";
import { hash,compare } from "bcrypt";
import { userModel } from "../models/userModel.js";
import jwt from 'jsonwebtoken';
const {sign} = jwt;
import {config} from 'dotenv';
import { verifyToken } from "../middlewares/verifyToken.js"
export const commonApp = exp.Router();
config();
 
//ROUTE FOR REGISTER
commonApp.post("/users",async(req,res)=>
{
    let allowedRoles = ['USER','AUTHOR'];
    // get user from req
    const newUser=req.body;
    // check the role
    if(!allowedRoles.includes(newUser.role))
    {
        return res.status(400).json({message:"Invalid Role"})
    }
    // hash password and replace plain with hashed password
    newUser.password=await hash(newUser.password,12);
    // create new user document
    const newUserDoc = new userModel(newUser);
    // save document
    await newUserDoc.save();
    // send res
    res.status(201).json({message:"user created"});
});

//ROUTE FOR LOGIN(USER.AUTHOR AND ADMIN)
commonApp.post("/login",async (req,res)=>
{
    // console.log(req.body)
    // get user cred obj
    const { email,password } = req.body;
    // find user by email
    const user = await userModel.findOne({email:email});
    // if user not found
    if(!user) 
    {
        return res.status(400).json({ message : "invalid email"});
    }
    // compare password
    const isMatched = await compare(password,user.password);
    // if passwords not matched
    if(!isMatched)
    {
        return res.status(400).json({message:"invalid password"});
    }
    // create jwt
    const signedToken = sign({id:user._id,email:email,role:user.role}, process.env.SECRET_KEY,{expiresIn:"1h"});
    // set token to res header as httponly cookie
    res.cookie("token",signedToken,
        {
            httpOnly:true,
            secure:false,
            sameSite:"lax",
        }
    );
    // remove password from user doc
    let userObj = user.toObject()
    delete userObj.password
    // send res
    res.status(200).json({message:"Login success "})
});

//ROUTE FOR LOGOUT
commonApp.get("/logout",(req,res)=>
{
    // delete token from cookie storage
    res.clearCookie("token",
        {
            httpOnly:true,
            secure:false,
            sameSite:"lax",
        }
    );
    // send res
    res.status(200).json({message:"Logout success"})
});


//change password
commonApp.put("/password",verifyToken("USER","AUTHOR","ADMIN"),async(req,res)=>{
   
//check current password and new password are same
const {cpassword,newPassword}=req.body;

const email=req.user.email;
//get current password of user/admin/author
const user=await userModel.findOne({email:email});
//check current password of req and user aren't same
const isMatched=await compare(cpassword,user.password);

if(!isMatched){
    return res.status(400).json({message:"Current password not matched"})
}

//hash new passwords
const hashedPassword=await hash(newPassword,12)

//replace current password of user with hashed new password 
user.password=hashedPassword
//save
await user.save();

//send res
res.status(200).json({message:"Password changed successfully"})
    })