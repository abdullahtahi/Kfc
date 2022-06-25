const express =require("express")
const {orderCreate,allOrders,singleOrder,orderLogin,deleteOrder,updateOrder}=require("../../controllerLogic/orderlogic")
const {userauthtication} =require('../../middleware/userauthtication')
const router =express.Router();
router.route("/order/new").post(userauthtication,orderCreate)
router.route("/orders").get(allOrders)
router.route("/order/:id").get(singleOrder)
router.route("/loginuser").get(userauthtication,orderLogin)
router.route("/deleteuser/:id").delete(deleteOrder)
router.route("/updateorder/:id").put(userauthtication,updateOrder)
module.exports=router   