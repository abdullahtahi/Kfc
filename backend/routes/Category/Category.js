const express =require ("express")
const router=express.Router();
const  {allCategory} =require("../../controllerLogic/categoryLogic") 
router.route("/all").get(allCategory)
module.exports=router 