/* eslint new-cap: "off", global-require: "off" */

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id',
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(30),
            field: 'name',
            allowNull: false
        },
        role: {
            type: DataTypes.STRING(20),
            field: 'role',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'users',
        timestamps: false
    });
};

module.exports.initRelations = () => {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.

    const model = require('../index');
    const User = model.User;
    const Ingredient = model.Ingredient;
    const IngredientList = model.IngredientList;
    const IngredientType = model.IngredientType;
    const MeasurementType = model.MeasurementType;
    const Recipe = model.Recipe;

    User.hasMany(Ingredient, {
        as: 'IngredientCreatedByFkeys',
        foreignKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.hasMany(Ingredient, {
        as: 'IngredientLastUpdatedByFkeys',
        foreignKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.hasMany(IngredientList, {
        as: 'IngredientListCreatedByFkeys',
        foreignKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.hasMany(IngredientList, {
        as: 'IngredientListLastUpdatedByFkeys',
        foreignKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.hasMany(IngredientType, {
        as: 'IngredientTypeCreatedByFkeys',
        foreignKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.hasMany(IngredientType, {
        as: 'IngredientTypeLastUpdatedByFkeys',
        foreignKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.hasMany(MeasurementType, {
        as: 'MeasurementTypeCreatedByFkeys',
        foreignKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.hasMany(MeasurementType, {
        as: 'MeasurementTypeLastUpdatedByFkeys',
        foreignKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.hasMany(Recipe, {
        as: 'RecipeCreatedByFkeys',
        foreignKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.hasMany(Recipe, {
        as: 'RecipeLastUpdatedByFkeys',
        foreignKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(IngredientType, {
        as: 'IngredientIngredientTypes',
        through: Ingredient,
        foreignKey: 'created_by',
        otherKey: 'ingredient_type',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(User, {
        as: 'IngredientLastUpdatedBies',
        through: Ingredient,
        foreignKey: 'created_by',
        otherKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(User, {
        as: 'IngredientCreatedBies',
        through: Ingredient,
        foreignKey: 'last_updated_by',
        otherKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(IngredientType, {
        as: 'IngredientIngredientTypes',
        through: Ingredient,
        foreignKey: 'last_updated_by',
        otherKey: 'ingredient_type',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(Ingredient, {
        as: 'IngredientListIngredients',
        through: IngredientList,
        foreignKey: 'created_by',
        otherKey: 'ingredient_id',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(User, {
        as: 'IngredientListLastUpdatedBies',
        through: IngredientList,
        foreignKey: 'created_by',
        otherKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(MeasurementType, {
        as: 'IngredientListMeasurementTypes',
        through: IngredientList,
        foreignKey: 'created_by',
        otherKey: 'measurement_type_id',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(Recipe, {
        as: 'IngredientListRecipes',
        through: IngredientList,
        foreignKey: 'created_by',
        otherKey: 'recipe_id',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(User, {
        as: 'IngredientListCreatedBies',
        through: IngredientList,
        foreignKey: 'last_updated_by',
        otherKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(Ingredient, {
        as: 'IngredientListIngredients',
        through: IngredientList,
        foreignKey: 'last_updated_by',
        otherKey: 'ingredient_id',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(MeasurementType, {
        as: 'IngredientListMeasurementTypes',
        through: IngredientList,
        foreignKey: 'last_updated_by',
        otherKey: 'measurement_type_id',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(Recipe, {
        as: 'IngredientListRecipes',
        through: IngredientList,
        foreignKey: 'last_updated_by',
        otherKey: 'recipe_id',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(User, {
        as: 'IngredientTypeLastUpdatedBies',
        through: IngredientType,
        foreignKey: 'created_by',
        otherKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(User, {
        as: 'IngredientTypeCreatedBies',
        through: IngredientType,
        foreignKey: 'last_updated_by',
        otherKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(User, {
        as: 'MeasurementTypeLastUpdatedBies',
        through: MeasurementType,
        foreignKey: 'created_by',
        otherKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(User, {
        as: 'MeasurementTypeCreatedBies',
        through: MeasurementType,
        foreignKey: 'last_updated_by',
        otherKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(User, {
        as: 'RecipeLastUpdatedBies',
        through: Recipe,
        foreignKey: 'created_by',
        otherKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    User.belongsToMany(User, {
        as: 'RecipeCreatedBies',
        through: Recipe,
        foreignKey: 'last_updated_by',
        otherKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
