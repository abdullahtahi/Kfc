const mongoose=require("mongoose")
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken")
const userSchema=new mongoose.Schema({
fullname:{
  type:String,
  required:[true,"please Enter your name"],  
min:[6,"your minimum requirment is 6 words"]
},
username:{
    type:String,
    required:[true,"Enter your username"]
},
email:{
    type:String,
    required:[true,"please Enter your email"],
    validate: {
        validator: function(v) {
          return  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
        },
        message: props => `${props.value} is not a valid email!`
      }
      
},
password:{
    type:String,
    required:[true,"the password must contain 2U_case,3L_case,1@,2Digit,and must be 8 "],
    validate:{
        validator: function(v){
return /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(v)
        },
        messaage:props=>`${props.value} is not a valid password`
    }
}
})

userSchema.pre("save",async function(){
    
    if(this.isModified('password')){
    this.password= await bcrypt.hash(this.password,10)
}
})
userSchema.methods.comparedPass=async function(password){
return await bcrypt.compare(password,this.password)
}
userSchema.methods.gentoken= async function(){
    return await jwt.sign({id:this._id},"Abdullah")
}
module.exports=mongoose.model('User',userSchema)













// {
//     "fullname":"Abdullah",
//     "username":"abdullah801",
//     "email":'tahirabdullah801@gmail.com',
// "password":"HEsoy@00"
// }