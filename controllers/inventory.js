var model = require('../models/index');

//Inventory Item controls (Model = ingredient)
exports.getAddInventoryItem = (req,res, next)=>{
    res.send('Add Inventory Item Form: unimplemented')
}
exports.postAddInventoryItem= (req, res, next)=>{
    res.send('Add Inventory Item: unimplemented')
}
exports.getRemoveInventoryItem =(req, res, next)=>{
    res.send('Remove Inventory Item Form: unimplemented')
}
exports.postRemoveInventoryItem= (req, res, next)=>{
    res.send('Remove Inventory Item: unimplemeneted')
}
exports.getUpdateInventoryItem =(req, res, next)=>{
    res.send('Update Inventory Item Form: unimplemented')
}
exports.postUpdateInventoryItem= (req, res, next)=>{
    res.send('Remove Inventory Item: unimplemeneted')
}
// currently no need for any CRUD functions (hard coded in database)
exports.getMeasurement =(req, res, next)=>{
    res.send('measurement array return: unimplemented')
}

//Loads the current inventory list
exports.getInventoryList = (req, res, next)=>{
    res.send('Show Inventory List: unimplemented')
}

