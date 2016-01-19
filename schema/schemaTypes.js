import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

const album = new GraphQLObjectType({
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

const artist = new GraphQLObjectType({
  name: 'Artist',
  description: 'Artist found on Spotify',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'The Spotify artist href',
      resolve: (artist) => artist.href
    },
    name: {
      type: GraphQLString,
      description: 'The name of the artist'
    },
    popularity: {
      type: GraphQLString,
      description: 'The overall popularity of the artist'
    }
  })
});

export default {
  album: album,
  artist: artist
};
