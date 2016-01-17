import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      album: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});

export default schema;