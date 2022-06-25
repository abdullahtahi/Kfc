const mongoose =require("mongoose")
const orderSchema=new mongoose.Schema({
    shippingInfo:{
    address:{
        type:String,
        required:[true,"Enter a address"]
    },
    city:{
type:String,
required:[true,"Enter a city"]
    },
    phoneNo:{
type:Number,
validate:{validator:function(v){
    /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/.test(v)
 },
    message: props => `${props.value} is not a valid phone number!`},
    required:[true,"Enter a phone Number"]
},
   postalCode:{
type:String,
required:[true,"Enter a postal code"]
    },
    country:{
type:String,
required:[true,"Enter a Country"]
    }
    },
    user:{
type:mongoose.Schema.Types.ObjectId,
required:[true,"Enter a user"],
ref:"User"
    },
  orderItems:{
      name:{
          type:String,
          required:[true,"Enter a orderItems"]
      },
      quantity:{
          type:Number,
          required:[true,"Enter a quantity"]
      },
      image:{
          type:String,

      },
      price:{
          type:Number,
          required:true
      },
      product:{
          type:mongoose.Schema.ObjectId,
          required:true
      },
},
paymentInfo:{
    id:{
        type:String,
        required:true,
    },
    status:{
        type:String

    }
    },
    paidAt:{
        type:Date
    },
    itemsPrice:{
        type:Number,
    required:true,
    default:0.0
    },
  
taxPrice:{
    type:Number,
    required:true,
    default:0.0
},
shoppingPrice:{
    type:Number,
    required:true,
    default:0.0
},
totalPrice:{
    type:Number,
    required:true,
    default:0.0
},
orderStatus:{
    type:String,
    required:true,
    default:"processing"
},
deliveredAt:{
    type:Date,
},
createdAt:{
    type:Date
}

})

module.exports=mongoose.model("Order",orderSchema)


// shippingInfo:{
//     "address":"house no 53 near viqar un nisa school",
//     "city":"islamabad",
//     "phoneNo":00315171085,
//    postalCode:4400"
//     country:"pakistan"
//     },
//     orderItems:{
//         "name":"burger",
//       "quantity":3,
//       image:"drive c",
//       "price":300,
//       "product":"12312j3hk1h3123h12h3123h12kh3k123812y3y1mb1323"
//     }      
// "paymentInfo":{
//     "id":"12321wwdqsad123123"
//     "status":"pending",
// },
// "itemsPrice":200,
  
// "taxPrice":0.14,
// "shppingPrice":150,
// "totalPrice":"500",
// "orderStatus":"processing",

