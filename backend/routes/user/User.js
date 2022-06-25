const express=require('express')
const {userauthtication} =require('../../middleware/userauthtication')
const router=express.Router();
const {createUser,logIn,logOut}=require("../../controllerLogic/userlogic")
router.route("/user/new").post(createUser)
router.route("/user/login").post(logIn)
router.route("/user/logout").get(logOut)

module.exports=router