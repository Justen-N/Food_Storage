const express = require('express');

const inventoryController = require('../controllers/inventory');

const router = express.Router();

router.get('/full-list',inventoryController.getInventoryList);

router.get('/add-inventory', inventoryController.getAddInventoryItem);
router.post('/add-inventory', inventoryController.postAddInventoryItem);

router.get('/remove-inventory', inventoryController.getRemoveInventoryItem);
router.post('/remove-inventory', inventoryController.postRemoveInventoryItem);

router.get('/update-inventory', inventoryController.getUpdateInventoryItem);
router.post('/update-inventory', inventoryController.postUpdateInventoryItem);


module.exports = router;
