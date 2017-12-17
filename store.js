const db = require('./models');

/**
 * Return promise. Save list of markets to db
 * @param {array of objects} data 
 */
module.exports.markets = (data) => {
  const proms = data.map(element => {
    // find by market name 'BTC-LTC'
    return db.Market.findOne({ where: { MarketName: element.MarketName } })
    .then(market => {
      // if not there - let's make
      if (!market) {
        return db.Market.create(element);
      }
      return market;
    });
  });
  return Promise.all(proms);
};

/**
 * Return promise. Save currency data of market to db
 * @param {Integer} marketId 
 * @param {String ['BTC', 'ETH']} currency 
 * @param {Object} data 
 */
module.exports.ticker = (Market, Currency, data) => {
  const code = `${Currency}-${Market.MarketCurrency}`;
  if (!data) {
    return Promise.resolve({});
  }

  return db.Ticker.create({ MarketId: Market.id, Currency, ...data });
};
