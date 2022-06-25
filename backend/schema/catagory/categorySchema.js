const mongoose=require("mongoose")
const categorySchema=mongoose.Schema({
    title:{
        type:String,
        required:["catagory is required "]
    }

})
module.exports=mongoose.model("Category",categorySchema)
// {
//     "title":"ALL"
// }