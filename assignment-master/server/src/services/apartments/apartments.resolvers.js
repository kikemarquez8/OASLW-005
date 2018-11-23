const { ObjectID } = require('mongodb');
export default function (Users, Locations) {

  const apartmentsResolvers = {
    Apartments: {
      owner: (apartment) => {
        return Users.find({ query: { _id: apartment.owner }}).then(({data}) => data[0]);
      },
      location: (apartment) => {
        return Locations.find({ query: { _id: apartment.location }}).then(({data}) => data[0]);
      },
      details: (apartment) => {
        return apartment.detail;
      }

    }
  };

  return apartmentsResolvers;
}
