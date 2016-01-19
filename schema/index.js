import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';
import schemaTypes from './schemaTypes';
import apiHelper from './apiHelper';


let albums = {
  type: new GraphQLList(schemaTypes.album),
  args: {
    name: {
      description: 'The name of the album',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: apiHelper.getAlbums
};

let artists = {
  type: new GraphQLList(schemaTypes.artist),
  args: {
    name: {
      description: 'The name of the artist',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: apiHelper.getArtists
};

let tracks = {
  type: new GraphQLList(schemaTypes.track),
  args: {
    name: {
      description: 'The name of the track',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: apiHelper.getTracks
};

let query = new GraphQLObjectType({
  name: 'Root',
  fields: {
    albums: albums,
    artists: artists,
    tracks: tracks
  }
});

export default new GraphQLSchema({query: query});
