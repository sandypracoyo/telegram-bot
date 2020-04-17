"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert("customers", [
        {
          full_name: "Abdur Rohman",
          username: "abdur-rohman",
          email: "abdur-rohman@mail.com",
          phone_number: "081234567890"
        }, {
          full_name: "Abdur Rohman",
          username: "abdur.rohman",
          email: "abdur.rohman@mail.com",
          phone_number: "081234567891"
        }, {
          full_name: "Abdur Rohman",
          username: "abdur_rohman",
          email: "abdur_rohman@mail.com",
          phone_number: "081234567892"
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('customers', null, {});
  }
};
