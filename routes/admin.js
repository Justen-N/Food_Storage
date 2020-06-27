const express = require('express');

const inventoryController = require('../controllers/inventory');

const router = express.Router();

router.get('/add-inventory-item',inventoryController.getAddInventory);

module.exports = router;
