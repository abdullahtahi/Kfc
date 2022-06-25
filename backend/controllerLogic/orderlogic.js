const { request, response } = require('express')
const { findByIdAndUpdate } = require('../schema/order/orderSchema')
const Order =require("../schema/order/orderSchema")
// const User=require('../schema/user/userSchema')
exports.orderCreate=async(request,response)=>{
const {
        shippingInfo,
        orderItems,
        paymentInfo,
        // paidAt:Date.now(),
        itemsPrice,
        taxPrice,
        shoppingPrice,
        totalPrice,
        orderStatus,
}=request.body
    try{
    const order= await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shoppingPrice,
        totalPrice,
        orderStatus,
        paidAt:Date.now(),
        user:request.user._id,
        deliveredAt:Date.now(),
        createdAt:Date.now()
    })
     response.status(200).json({
        success:true,
        message:"the order is placed successfully"
    })
} 
catch(error){
    console.log(error)
    response.status(400).json({
        success:false,
     
    })
}
}
exports.allOrders=async(request,response)=>{
    try{
const order =await Order.find()
        response.status(200).json({
            success:true,
            message:"the all Orders are",    
            order
            })
    }catch(error){
            response.status(400).json({
            success:false,
            error  
            })
        
    }
}
exports.singleOrder=async(request,response)=>{
    try{
const order=await Order.findById(request.params.id)
        response.status(200).json({
success:true,
message:"the single route is",
order

        })
    }catch(error){
        response.status(400).json({
            success:false,
            error
        })
    }
}
exports.orderLogin=async(request,response)=>{
try{
    const  orderId=request.user._id
    const order=await Order.find()
    const userId=Object.values(order).map((loop)=>loop.user)
    const user=await Order.findById()
console.log(user)
// console.log(orderId)

//   if(userId===orderId)
//   {
//     response.status(400).json({
//         success:true,
//         user})
//   }
}catch(error){
    console.log(error)
    response.status(400).json({
success:false,
error

})
}
}
exports.deleteOrder=async(request,response)=>{
    try{
        const order=await Order.findByIdAndDelete(request.params.id)
    response.status(200).json({
        success:true,
        message:"this is a delete route",
        order

    })
    }catch(error){
        response.status(200).json({
            success:false,
            error
        })
    }

}
exports.updateOrder=async(request,response)=>{
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        // paidAt:Date.now(),
        itemsPrice,
        taxPrice,
        shoppingPrice,
        totalPrice,
        orderStatus,
}=request.body
try{

    const order=await Order.findByIdAndUpdate(request.params.id,{
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shoppingPrice,
        totalPrice,
        orderStatus,
        paidAt:Date.now(),
        user:request.user._id,
        deliveredAt:Date.now(),
        createdAt:Date.now()
    })
    await response.status(200).json({
    success:true,
    message:"This is a update route",    
    order
})
}catch(error){
    console.log(error)
    response.status(400).json({
    success:false,
    
})
}

}