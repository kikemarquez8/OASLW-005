export default function(Query, Service, GetServiceName, FindServiceName) {
  Object.assign(Query, {
    [`${GetServiceName}`]: (root, args, context) => {
      return Service.find(Object.assign({}, context, { query: args })).then(result => result[0]);
    },
  });
  Object.assign(Query, {
    [`${FindServiceName}`]: (root, args, context) => {
      return Service.find(Object.assign({}, context, { query: args })).then(({data}) => {
        return { total: data.length, items: data };
      });
    },
  });
}

