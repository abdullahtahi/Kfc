const Category=require("../schema/catagory/categorySchema")
exports.allCategory=async(request,response)=>{
try{
 const category=await Category.find() 
    response.status(200).json(category)
}catch(error)
{
    response.status(400).json({
        success:false,
        error

})
}
}