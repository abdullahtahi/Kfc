const express=require("express")
const router=express.Router();
const {createProducts,allProducts,singleProduct,updateProduct,deleteProduct}=require('../../controllerLogic/productLogic')
// create user 
// localhost:5000/api/product/new
router.route("/product/new").post(createProducts)
//All product
// localhost:5000/api/products
router.route("/products").get(allProducts)
//Single product
// localhost:5000/api/product/:id
router.route("/product/:id").get(singleProduct)
//update product
// localhost:5000/api/product/update/:id
router.route("/product/update/:id").put(updateProduct)
router.route("/product/delete/:id").delete(deleteProduct)

module.exports=router;