'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userRoles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roleid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'roles', // Model name
          key: 'id',      // Primary key field
        }
      },
      userid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // Model name
          key: 'id',      // Primary key field
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        default : new Date()
      },
      updatedAt: {
        type: Sequelize.DATE,
        default : new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userRoles');
  }
};