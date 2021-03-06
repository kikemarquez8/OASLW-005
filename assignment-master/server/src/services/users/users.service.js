const createService = require('feathers-mongodb');
const hooks = require('./users.hooks');

module.exports = function () {
  const app = this;
  const mongoClient = app.get('mongoClient');

  app.use('/users', createService({
      paginate:{
          default:10,
          max:100
      }
  }));
  const service = app.service('users');

  mongoClient.then(db => {
    service.Model = db.collection('users');
  });

  service.hooks(hooks);
};
