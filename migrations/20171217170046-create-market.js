'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Markets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MarketCurrency: {
        allowNull: false,
        type: Sequelize.STRING
      },
      BaseCurrency: {
        allowNull: false,
        type: Sequelize.STRING
      },
      MarketCurrencyLong: {
        allowNull: false,
        type: Sequelize.STRING
      },
      BaseCurrencyLong: {
        allowNull: false,
        type: Sequelize.STRING
      },
      MinTradeSize: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      MarketName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      IsActive: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      Created: {
        allowNull: false,
        type: Sequelize.DATE
      },
      Notice: {
        allowNull: true,
        type: Sequelize.STRING
      },
      IsSponsored: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      LogoUrl: {
        allowNull: true,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Markets');
  }
};