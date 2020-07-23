const { Sequelize } = require('sequelize');

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
    model.Ingredient = require('./definition/ingredient.js')(sequelize,Sequelize);
    model.IngredientList = require('./definition/ingredient-list.js')(sequelize,Sequelize);
    model.IngredientType = require('./definition/ingredient-type.js')(sequelize,Sequelize);
    model.MeasurementType = require('./definition/measurement-type.js')(sequelize,Sequelize);
    model.Recipe = require('./definition/recipe.js')(sequelize,Sequelize);
    model.User = require('./definition/users.js')(sequelize,Sequelize);

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
