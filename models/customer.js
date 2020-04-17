'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    full_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, { });
  customer.associate = (models) => {
    customer.hasMany(models.order, { 
      foreignKey: "user_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    })
  };
  return customer;
};