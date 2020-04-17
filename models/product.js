'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, { });
  product.associate = (models) => {
    product.belongsToMany(models.order, {
      through: models.order_item,
      foreignKey: 'product_id',
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    })
  };
  return product;
};