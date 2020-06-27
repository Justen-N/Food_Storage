/* eslint global-require: "off" */
const model = {};
let initialized = false;

/**
 * Initializes sequelize models and their relations.
 * @param   {Object} sequelize  - Sequelize instance.
 * @returns {Object}            - Sequelize models.
 */
function init(sequelize) {
    delete module.exports.init; // Destroy itself to prevent repeated calls and clash with a model named 'init'.
    initialized = true;
    // Import model files and assign them to `model` object.
    model.Ingredient = sequelize.import('./definition/ingredient.js');
    model.IngredientList = sequelize.import('./definition/ingredient-list.js');
    model.IngredientType = sequelize.import('./definition/ingredient-type.js');
    model.MeasurementType = sequelize.import('./definition/measurement-type.js');
    model.Recipe = sequelize.import('./definition/recipe.js');
    model.User = sequelize.import('./definition/users.js');

    // All models are initialized. Now connect them with relations.
    require('./definition/ingredient.js').initRelations();
    require('./definition/ingredient-list.js').initRelations();
    require('./definition/ingredient-type.js').initRelations();
    require('./definition/measurement-type.js').initRelations();
    require('./definition/recipe.js').initRelations();
    require('./definition/users.js').initRelations();
    return model;
}

// Note: While using this module, DO NOT FORGET FIRST CALL model.init(sequelize). Otherwise you get undefined.
module.exports = model;
module.exports.init = init;
module.exports.isInitialized = initialized;
