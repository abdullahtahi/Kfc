const { request, response } = require('express')
const Product=require("../schema/product/productSchema")
exports.createProducts=async(request,response)=>{
    try{
        const product=await Product.create(request.body)
        response.status(200).json(product)
    }catch(error){
response.status(400).json(error)
    }
}
exports.allProducts=async(request,response)=>{
    try{
        const product=await Product.find()
        response.status(200).json(product)
    }catch(error){
    response.status(400).json({
    success:false,
    error
})
    }
}
exports.singleProduct=async(request,response)=>{
    try{
        product=await Product.findById(request.params.id)
        response.status(200).json(product)
    }catch(error){
    response.status(400).json({

        success:false,
        error
        })
        
    }
}
exports.updateProduct=async(request,response)=>{
    try{
        const product =await Product.findByIdAndUpdate(request.params.id,request.body)
        response.status(200).json(product)
    }catch(error)
{
    response.status(400).json({
        success:false,
        error
    })
}
}
exports.deleteProduct=async(request,response)=>{
   try{
       const product=await Product.findByIdAndDelete(request.params.id)
    response.status(200).json(product)
   }catch(error){
    response.status(400).json({
        success:false,
       error
    })
   }
}
