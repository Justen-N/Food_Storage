const express = require('express');

const inventoryController = require('../controllers/inventory');

const router = express.Router();

router.get('/', (req,res,next)=> {
    res.send("nothing here yet")
})

module.exports = router;
