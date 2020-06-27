/* eslint new-cap: "off", global-require: "off" */

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Recipe', {
        recipeId: {
            type: DataTypes.INTEGER,
            field: 'recipe_id',
            allowNull: false,
            primaryKey: true
        },
        recipeName: {
            type: DataTypes.STRING(100),
            field: 'recipe_name',
            allowNull: false
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
        tableName: 'recipe',
        timestamps: false
    });
};

module.exports.initRelations = () => {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.

    const model = require('../index');
    const Recipe = model.Recipe;
    const IngredientList = model.IngredientList;
    const User = model.User;
    const Ingredient = model.Ingredient;
    const MeasurementType = model.MeasurementType;

    Recipe.hasMany(IngredientList, {
        as: 'IngredientListRecipeIdFkeys',
        foreignKey: 'recipe_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    Recipe.belongsTo(User, {
        as: 'RelatedCreatedBy',
        foreignKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Recipe.belongsTo(User, {
        as: 'RelatedLastUpdatedBy',
        foreignKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Recipe.belongsToMany(User, {
        as: 'IngredientListCreatedBies',
        through: IngredientList,
        foreignKey: 'recipe_id',
        otherKey: 'created_by',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    Recipe.belongsToMany(Ingredient, {
        as: 'IngredientListIngredients',
        through: IngredientList,
        foreignKey: 'recipe_id',
        otherKey: 'ingredient_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    Recipe.belongsToMany(User, {
        as: 'IngredientListLastUpdatedBies',
        through: IngredientList,
        foreignKey: 'recipe_id',
        otherKey: 'last_updated_by',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    Recipe.belongsToMany(MeasurementType, {
        as: 'IngredientListMeasurementTypes',
        through: IngredientList,
        foreignKey: 'recipe_id',
        otherKey: 'measurement_type_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

};
