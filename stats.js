const db = require('./models');

db.Market.count()
.then(c => {
  console.log('Count of markets: ', c);
  return db.Ticker.count();
})
.then(c => {
  console.log('Count of tickers: ', c);  
  return db.Ticker.findById(c);
})
.then(t => {
  if (!t) return Promise.resolve({});
  console.log("Last ticker was created ", t.createdAt);
})
.then(() => process.exit(0))
.catch(err => console.error(err));
