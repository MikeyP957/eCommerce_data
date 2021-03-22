const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for books
class Category extends Model {}

Category.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    cateory_name: {
      type: DataTypes.STRING,
        allowNull: fasle,
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
