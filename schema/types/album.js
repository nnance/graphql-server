import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Album',
  description: 'Albums found on Spotify',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'The Spotify album href',
      resolve: (album) => album.href
    },
    name: {
      type: GraphQLString,
      description: 'The name of the album'
    },
    popularity: {
      type: GraphQLString,
      description: 'The overall popularity of the album'
    }
  })
});
