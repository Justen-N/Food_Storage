const model= require("../models/index.js")
const validator = require("express-validator")

//Inventory Item controls (Model = ingredient)
exports.getAddInventoryItem = async(req,res, next)=>{
    locals = {
        nameLabel:"Add Inventory Item"
        }
    try {
        locals.ingredientTypes = await model.IngredientType.findAll();
        locals.measurementTypes = await model.MeasurementType.findAll();
    } catch (error) {
        console.error("Unable to load form information",error)
    }
    //console.log(locals.ingredientTypes);
    //console.log(locals.measurementTypes);
    res.render('../views/addItem.njk',locals)
}
exports.postAddInventoryItem= [
    validator.body('ingredient_name', 'Missing a Name').notEmpty().escape()
    ,
    async (req, res, next)=>{
        console.log(req.body)
    const errors = validator.validationResult(req);
    var ingredient = { name:req.body.ingredient_name,}
    if (errors.isEmpty()){
    try{
    //await model.Ingredient.create()
    }
    catch{
        console.error("Unable to Create new inventory item",error)
    }
    res.send('Add Inventory Item: unimplemented')
}
}]
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

