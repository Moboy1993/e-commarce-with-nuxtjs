const router = require('express').Router();
const res = require('express/lib/response');
const Product = require("../models/product");
const mongoose = require("mongoose");

router.post("/product", async (req, res) => {
    try {
        let product = new Product();
        product.title = req.body.title;
        product.stockNumber = req.body.stockNumber;
        product.description = req.body.description;
        product.photo = req.body.photo;
        product.mainCategory = req.body.mainCategory;
        product.subCategory = req.body.subCategory;
        await product.save();
        res.json({
            success: true,
            message: "product is saved succesfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
});
router.get("product/:id",async(req,res)=>{
    try {
        let product = await Product.findOne({_id:req.params.id}).exec();
        res.json({
            success: true,
            product:product,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

module.exports=router;