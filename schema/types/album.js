import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Album',
  description: 'Albums found on Spotify',
  fields: {
    name: {
      type: GraphQLString,
      description: 'The name of the album'
    },
    popularity: {
      type: GraphQLString,
      description: 'The overall popularity of the album'
    }
  }
});
