const express = require('express');
const route =  express.Router();
const UserModel = require('../Model.js/UserSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const authentication = (req,res,next)=>{
    try {
        const tokenverify = jwt.verify(req.cookies.token,process.env.JWT_SECRET);
        if(tokenverify){
            // res.status(200).json({"message":"now you can access","id":tokenverify})
            next()

        }
        else{
            res.status(404).json("Invalid Crediential")
        }
    } catch (error) {
        console.log(error);
    }


}

route.get('/',authentication,(req,res)=>{
    res.send("saldkj alksjfd lksajd")
})

route.post('/register',async (req,res)=>{
    const {uname,email,password} = req.body;
    if(!uname || !email || !password){
        res.status(401).json({"error":"Please Fill the"})
    }else{
            const user = await UserModel.findOne({email:email})
            if(user){
                res.status(401).json({"error":"User already found"})
            }else{
                const hashpassword = await bcrypt.hash(password,12)
                const newuser = new UserModel({
                    uname:uname,
                    email:email,
                    password:hashpassword
               
                })
                await newuser.save()
                res.status(201).json({"message":"User Succesfull Register"})
            }

       
    }
})

// User Login Route

route.post('/login',async (req,res)=>{
    try {
        const {email,password} = req.body;
        if(email && password){
        const user = await UserModel.findOne({email:email})
        if(user){
            const isMatch = await bcrypt.compare(password,user.password)
            if(isMatch){

                if((email === user.email) && isMatch){
                    // generate token
                    const token = jwt.sign({userID:user._id},process.env.JWT_SECRET,{expiresIn:"5d"});
                    res.cookie("token",token,{
                        httpOnly: true,
                        // secure: process.env.NODE_ENV === "production",
                        
                      })
                    res.status(200).json({"status":"Success","message":"User Successfull Login","token":token})

                }else{res.status(404).json({"status":"faild","message":"Please Enter Valid Email & Password"})} 
            }else{
                res.status(404).json({"status":"faild","message":"Please Enter Valid Email & Passwordd"})
            }
        }
        else{
            res.status(404).json({"status":"faild","message":"Enter Valid Email and Password"})
        }
    }else{
        res.status(401).json({"status":"faild","message":"Please fill the feild"})
    }
    } catch (error) {
        res.send(error)
    }
})

route.get('/user',authentication ,(req,res)=>{
    res.send("asdkjsladkfj");
})


module.exports = route;
