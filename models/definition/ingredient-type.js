/* eslint new-cap: "off", global-require: "off" */

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('IngredientType', {
        ingredientTypeId: {
            type: DataTypes.INTEGER,
            field: 'ingredient_type_id',
            allowNull: false,
            primaryKey: true
        },
        ingredientTypeName: {
            type: DataTypes.STRING(30),
            field: 'ingredient_type_name',
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
        tableName: 'ingredient_type',
        timestamps: false
    });
};

module.exports.initRelations = () => {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.

    const model = require('../index');
    const IngredientType = model.IngredientType;
    const Ingredient = model.Ingredient;
    const User = model.User;

    IngredientType.hasMany(Ingredient, {
        as: 'IngredientIngredientTypeFkeys',
        foreignKey: 'ingredient_type',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IngredientType.belongsTo(User, {
        as: 'RelatedCreatedBy',
        foreignKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IngredientType.belongsTo(User, {
        as: 'RelatedLastUpdatedBy',
        foreignKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IngredientType.belongsToMany(User, {
        as: 'IngredientCreatedBies',
        through: Ingredient,
        foreignKey: 'ingredient_type',
        otherKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IngredientType.belongsToMany(User, {
        as: 'IngredientLastUpdatedBies',
        through: Ingredient,
        foreignKey: 'ingredient_type',
        otherKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
