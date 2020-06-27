/* eslint new-cap: "off", global-require: "off" */

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('IngredientList', {
        recipeId: {
            type: DataTypes.INTEGER,
            field: 'recipe_id',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'recipe',
                key: 'recipe_id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        ingredientId: {
            type: DataTypes.INTEGER,
            field: 'ingredient_id',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'ingredient',
                key: 'ingredient_id'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        amount: {
            type: DataTypes.DECIMAL,
            field: 'amount',
            allowNull: false,
            defaultValue: 1
        },
        measurementTypeId: {
            type: DataTypes.INTEGER,
            field: 'measurement_type_id',
            allowNull: true,
            references: {
                model: 'measurement_type',
                key: 'measurement_type_id'
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
        tableName: 'ingredient_list',
        timestamps: false
    });
};

module.exports.initRelations = () => {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.

    const model = require('../index');
    const IngredientList = model.IngredientList;
    const User = model.User;
    const Ingredient = model.Ingredient;
    const MeasurementType = model.MeasurementType;
    const Recipe = model.Recipe;

    IngredientList.belongsTo(User, {
        as: 'RelatedCreatedBy',
        foreignKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IngredientList.belongsTo(Ingredient, {
        as: 'Ingredient',
        foreignKey: 'ingredient_id',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IngredientList.belongsTo(User, {
        as: 'RelatedLastUpdatedBy',
        foreignKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IngredientList.belongsTo(MeasurementType, {
        as: 'MeasurementType',
        foreignKey: 'measurement_type_id',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IngredientList.belongsTo(Recipe, {
        as: 'Recipe',
        foreignKey: 'recipe_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

};
