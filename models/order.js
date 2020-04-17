'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    user_id: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM,
      values: ['accepted', 'sending', 'done', 'failure']
    },
    driver_id: DataTypes.INTEGER
  }, { });
  order.associate = (models) => {
    order.belongsTo(models.customer, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    })
    order.belongsTo(models.driver, {
      foreignKey: "driver_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    })
    order.belongsToMany(models.product, {
      through: models.order_item,
      foreignKey: 'order_id',
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    })
  };
  return order;
};