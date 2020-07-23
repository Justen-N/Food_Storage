const express = require('express');

const inventoryController = require('../controllers/inventory');

const router = express.Router();

router.get('/', (req,res,next)=> {
    res.render("../views/index.njk",{title:'Food Storage Inventory Home'})
})
router.get('/addIngredientType',(req,res,next)=>{
    res.render("../views/addItem.njk")
})

module.exports = router;
