import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import album from './types/album';

let query = new GraphQLObjectType({
  name: 'Root',
  fields: {
    albums: {
      type: album,
      resolve() {
        return {
          "name": "Greatest Hits",
          "popularity": "0.73"
        };
      }
    }
  }
});

export default new GraphQLSchema({query: query});
