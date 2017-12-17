const fetch = require('node-fetch');
const CronJob = require('cron').CronJob;

// read env vars
require('dotenv').config();

const store = require('./store');


// set urls
const urls = {
  getMarkets: 'https://bittrex.com/api/v1.1/public/getmarkets',
  getTicker: (currency, market) => {
    return `https://bittrex.com/api/v1.1/public/getticker?market=${currency}-${market}`;
  }
};

// main function to get data from api and store it to db
function getData() {
  // markets
  fetch(urls.getMarkets)
  .then(res => res.json())
  .then(res => store.markets(res.result))
  // tickers
  .then(markets => {      
      const proms = markets.map((market) => {
        // BTC
        return fetch(urls.getTicker('BTC', market.MarketCurrency))
        .then(res => res.json())
        .then(res => store.ticker(market, 'BTC', res.result))
        // ETH
        .then(() => fetch(urls.getTicker('ETH', market.MarketCurrency)))
        .then(res => res.json())
        .then(res => store.ticker(market, 'ETH', res.result));
      });

      return Promise.all(proms);
    })
    .catch(err => console.error(err));
}

let counts = 0;

// make cron object and run it
const job = new CronJob('0 * * * * *', () => {
  getData();
  counts++;
  console.log('Data was successfully got. Time: ' + new Date() + '. Counter: ' + counts);
}, null, true);
