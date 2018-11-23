const createService = require('feathers-mongodb');
const hooks = require('./countries.hooks');

module.exports = function() {
    const app = this;
    const mongoClient = app.get('mongoClient');

    const countriesService = createService({
        paginate:{
            default:10,
            max:100
        }
    });
    app.use('/countries', countriesService);

    const service = app.service('countries');

    mongoClient.then(db => {
        service.Model = db.collection('countries');
    });

    service.hooks(hooks);
};
