const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
title:{
type:String,
required:[true,'please Enter a title']
// unique:true
},
slug:{ 
type:String,
requried:[true,'the Slug is required']
},
description:{
type:String,
required:[true,'the description is required']
},
price:{
type:Number,
required:[true,'the price tag is required']
},
stock:{
type:Number,
required:[true,'The stock is required']
},
category:{
type:String,
required:[true,"the catagory is required"]
}
 });
 module.exports=mongoose.model('Product',productSchema)

// id: 15,
// title: "fish",
// slug: "fish",
// image: "/images/products/sb-4.png",
// description: "5 Pcs Hot & Crispy Chicken + 1 Large Fries + 2 Drinks.",
// price: 950,
// stock: 14,
// category: "Freshmeat"