'use strict';
module.exports = function(sequelize, DataTypes) {
  var Market = sequelize.define('Market', {
    MarketCurrency: {
      allowNull: false,
      type: DataTypes.STRING
    },
    BaseCurrency: {
      allowNull: false,
      type: DataTypes.STRING
    },
    MarketCurrencyLong: {
      allowNull: false,
      type: DataTypes.STRING
    },
    BaseCurrencyLong: {
      allowNull: false,
      type: DataTypes.STRING
    },
    MinTradeSize: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    MarketName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    IsActive: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    Created: {
      allowNull: false,
      type: DataTypes.DATE
    },
    Notice: {
      allowNull: true,
      type: DataTypes.STRING
    },
    IsSponsored: {
      allowNull: true,
      type: DataTypes.BOOLEAN
    },
    LogoUrl: {
      allowNull: true,
      type: DataTypes.STRING
    },    
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Market;
};