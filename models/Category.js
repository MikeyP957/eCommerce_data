const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Category extends Model {}

Category.init(
  {
    
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    cateory_name: {
      type: DataTypes.STRING,
        allowNull: false,
    },
    
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    modelName: 'Category'
  }
);

module.exports = Category;
