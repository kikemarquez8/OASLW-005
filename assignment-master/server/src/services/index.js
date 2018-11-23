const profiles = require('./profiles/profiles.service.js');
const users = require('./users/users.service.js');
const apartments = require('./apartments/apartments.service.js');
const locations = require('./locations/locations.service.js');
const countries = require('./countries/countries.service');
const graphql = require('./graphql/graphql.service.js');
const  {paginationDefined, formatQueryPagination} = require('./../helpers')
module.exports = function () {
  const app = this;
  app.hooks({
      before: async (context) => {
        return paginationDefined(context.params) && formatQueryPagination(context) || context
      }
  })
  app.configure(profiles);
  app.configure(users);
  app.configure(apartments);
  app.configure(locations);
  app.configure(countries);
  app.configure(graphql);
};
