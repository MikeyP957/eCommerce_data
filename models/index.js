// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
})
// Categories have many Products
Category.hasMany(
    Product, {
        forgeignKey: 'category_id',
        onDelete: 'CASCADE',
    }
)

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(
    Tag, {
        through: {
            model: ProductTag,
            unique: false,
        },
        //as : ''
    }
);
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(
    Product, {
        through: {
            ProductTag,
            unique: false,
        }
     //alias
        //as: ''
    }
)


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
