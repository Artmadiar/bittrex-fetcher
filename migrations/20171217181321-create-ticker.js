'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Tickers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MarketId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Markets',
          key: 'id'
        }
      },
      Currency: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Bid: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      Ask: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      Last: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Tickers');
  }
};