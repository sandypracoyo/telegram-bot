"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("customers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:  {
          args: true,
          msg: 'Username already in use!'
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:  {
          args: true,
          msg: 'Email address already in use!'
        }
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:  {
          args: true,
          msg: 'Phone number already in use!'
        }
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("customers");
  }
};
