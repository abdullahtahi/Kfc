const express=require('express')
const User=require("../schema/user/userSchema")
exports.createUser=async(request,response)=>{
try{
    const user=await User.create(request.body)
    response.status(200).json({
        success:true,
        message:"the user is created successfully",
        user
    })
}catch(error){
    response.status(400).json({
    success:false,
    error
})
}
}
exports.logIn=async(request,response)=>{
   try{
    const {email,password}= await request.body;
    if(!email|| !password)
    {
        response.status(400).json({
            success:false,
            message:"email and password is required"
        })
    }
    const user=await User.findOne({email})
    if(!user)
    {
        return response.status(400).json({
            success:false,
            message:"the user is not found"

        })
    }
    const ismatched=await user.comparedPass(password)
    if(!ismatched)
    {
        return response.status(400).json({
            success:false,
            message:" the password is not correct"
        })
    }
    const token=await user.gentoken()
response.status(200).cookie('token',token,{httpOnly:true,}).json({
    success:true,
    message:"I am logged in",
    token
})
   }catch(error){
       success:false,
       error
   }
}
exports.logOut=async(request,response)=>{
    try{
    return  await response.status(200).cookie('token',null,{httpOnly:true,expires:new Date(Date.now())}).json({
            message:"the user is logged out"
                })
    }
    catch(error)
    {
        response.status(400).json({
            success:false,
            error
                })
    }
}
