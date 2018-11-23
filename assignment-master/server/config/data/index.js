const conf = require('../default');
const mongoClient = require('mongodb').MongoClient;
const { ObjectID } = require('mongodb');
const profiles = require('./profiles');
const users = require('./users');
const apartments = require('./apartments');
const locations = require('./locations');
const countries = require('./countries');

mongoClient
  .connect(conf.mongodb)
  .then(db => {
    return db.dropDatabase()
      .then(() => {
        return db.collection('profiles').insertMany(profiles);
      })
      .then(() => {
        return db.collection('users').insertMany(users);
      })
      .then(() => {
        return db.collection('apartments').insertMany(apartments);
      })
      .then(() => {
        return db.collection('locations').insertMany(locations.map(setIdToObjectId));
      })
      .then(() => {
        return db.collection('countries').insertMany(countries);
      })
      .then(() => {
        return db.close();
      });
  })
  .catch(err => {
    console.log(err);
  });


function setIdToObjectId(entity){
  entity._id =  new ObjectID(entity._id)
  return entity
}
