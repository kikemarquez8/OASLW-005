const createService = require('feathers-mongodb');
const hooks = require('./locations.hooks');
const { ObjectID } = require('mongodb');
module.exports = function() {
  const app = this;
  const mongoClient = app.get('mongoClient');

  const locationService = createService({
      paginate:{
        default:10,
        max:100
      }
  });
  app.use('/locations', locationService);

  const service = app.service('locations');

  mongoClient.then(db => {
    service.Model = db.collection('locations');
  });

  service.hooks(hooks);
};
