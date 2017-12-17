'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ticker = sequelize.define('Ticker', {
    MarketId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Market',
        key: 'id'
      }
    },
    Currency: {
      allowNull: false,
      type: DataTypes.STRING
    },
    Bid: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    Ask: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    Last: {
      allowNull: false,
      type: DataTypes.DOUBLE
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Ticker;
};