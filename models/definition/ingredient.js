/* eslint new-cap: "off", global-require: "off" */

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Ingredient', {
        ingredientId: {
            type: DataTypes.INTEGER,
            field: 'ingredient_id',
            allowNull: false,
            primaryKey: true
        },
        ingredientName: {
            type: DataTypes.STRING(50),
            field: 'ingredient_name',
            allowNull: false
        },
        ingredientType: {
            type: DataTypes.INTEGER,
            field: 'ingredient_type',
            allowNull: true,
            references: {
                model: 'ingredient_type',
                key: 'ingredient_type_id'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        createdBy: {
            type: DataTypes.INTEGER,
            field: 'created_by',
            allowNull: true,
            references: {
                model: 'users',
                key: 'user_id'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        creationDate: {
            type: DataTypes.DATE,
            field: 'creation_date',
            allowNull: true
        },
        lastUpdatedBy: {
            type: DataTypes.INTEGER,
            field: 'last_updated_by',
            allowNull: true,
            references: {
                model: 'users',
                key: 'user_id'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        lastUpdateDate: {
            type: DataTypes.DATE,
            field: 'last_update_date',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ingredient',
        timestamps: false
    });
};

module.exports.initRelations = () => {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.

    const model = require('../index');
    const Ingredient = model.Ingredient;
    const IngredientList = model.IngredientList;
    const User = model.User;
    const IngredientType = model.IngredientType;
    const MeasurementType = model.MeasurementType;
    const Recipe = model.Recipe;

    Ingredient.hasMany(IngredientList, {
        as: 'ListIngredientIdFkeys',
        foreignKey: 'ingredient_id',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Ingredient.belongsTo(User, {
        as: 'RelatedCreatedBy',
        foreignKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Ingredient.belongsTo(IngredientType, {
        as: 'RelatedIngredientType',
        foreignKey: 'ingredient_type',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Ingredient.belongsTo(User, {
        as: 'RelatedLastUpdatedBy',
        foreignKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Ingredient.belongsToMany(User, {
        as: 'IngredientListCreatedBies',
        through: IngredientList,
        foreignKey: 'ingredient_id',
        otherKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Ingredient.belongsToMany(User, {
        as: 'IngredientListLastUpdatedBies',
        through: IngredientList,
        foreignKey: 'ingredient_id',
        otherKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Ingredient.belongsToMany(MeasurementType, {
        as: 'IngredientListMeasurementTypes',
        through: IngredientList,
        foreignKey: 'ingredient_id',
        otherKey: 'measurement_type_id',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Ingredient.belongsToMany(Recipe, {
        as: 'IngredientListRecipes',
        through: IngredientList,
        foreignKey: 'ingredient_id',
        otherKey: 'recipe_id',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
