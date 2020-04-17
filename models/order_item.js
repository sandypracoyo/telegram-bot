'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_item = sequelize.define('order_item', {
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'order',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    quantity: DataTypes.INTEGER
  }, { });
  order_item.associate = (models) => {
    
  };
  return order_item;
};