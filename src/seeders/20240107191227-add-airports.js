'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
        await queryInterface.bulkInsert('Airports',[
          {
            name: 'gopal ganj internation airport',
            cityId:9,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'patna internation airport',
            cityId:8,
            createdAt: new Date(),
            updatedAt: new Date()
          },
           {
            name: 'Mumabi internation airport',
            cityId:7,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
