const jwt=require("jsonwebtoken")
const User=require("../schema/user/userSchema")
var cookieParser = require('cookie-parser')
exports.userauthtication=async(request,response,next)=>{
   try{
       const {token}=await request.cookies;
    if(!token)
    {
        response.status(400).json({
            success:false,
            message:"the user have to login first"
        })
    }
      
        const decoded=await jwt.verify(token,"Abdullah")
        request.user=await User.findById(decoded.id)
    next()
   }catch(error){
    response.status(400).json({
    error
})
   }
}
