const MongoClient = require('mongodb').MongoClient;

module.exports = function () {
  const app = this;
  const config = process.env['MONGO_URL'] || app.get('mongodb');
  const promise = MongoClient.connect(config);

  app.set('mongoClient', promise);
  // promise.then(db => {
  //   db.collection('locations').find({_id: '5b62B540BcFF044ffA169f60'}).toArray((err,docs) => console.log(docs))
  // })
};
