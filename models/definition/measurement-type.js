/* eslint new-cap: "off", global-require: "off" */

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('MeasurementType', {
        measurementTypeId: {
            type: DataTypes.INTEGER,
            field: 'measurement_type_id',
            allowNull: false,
            primaryKey: true
        },
        measurementTypeName: {
            type: DataTypes.STRING(30),
            field: 'measurement_type_name',
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
        tableName: 'measurement_type',
        timestamps: false
    });
};

module.exports.initRelations = () => {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.

    const model = require('../index');
    const MeasurementType = model.MeasurementType;
    const IngredientList = model.IngredientList;
    const User = model.User;
    const Ingredient = model.Ingredient;
    const Recipe = model.Recipe;

    MeasurementType.hasMany(IngredientList, {
        as: 'IngredientListMeasurementTypeIdFkeys',
        foreignKey: 'measurement_type_id',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MeasurementType.belongsTo(User, {
        as: 'RelatedCreatedBy',
        foreignKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MeasurementType.belongsTo(User, {
        as: 'RelatedLastUpdatedBy',
        foreignKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MeasurementType.belongsToMany(User, {
        as: 'IngredientListCreatedBies',
        through: IngredientList,
        foreignKey: 'measurement_type_id',
        otherKey: 'created_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MeasurementType.belongsToMany(Ingredient, {
        as: 'IngredientListIngredients',
        through: IngredientList,
        foreignKey: 'measurement_type_id',
        otherKey: 'ingredient_id',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MeasurementType.belongsToMany(User, {
        as: 'IngredientListLastUpdatedBies',
        through: IngredientList,
        foreignKey: 'measurement_type_id',
        otherKey: 'last_updated_by',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MeasurementType.belongsToMany(Recipe, {
        as: 'IngredientListRecipes',
        through: IngredientList,
        foreignKey: 'measurement_type_id',
        otherKey: 'recipe_id',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
