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

let album = {
  type: schemaTypes.album,
  args: {
    id: {
      description: 'The id of the album',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: apiHelper.getAlbum
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

let artist = {
  type: schemaTypes.artist,
  args: {
    id: {
      description: 'The id of the artist',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: apiHelper.getArtist
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

let track = {
  type: schemaTypes.track,
  args: {
    id: {
      description: 'The id of the track',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: apiHelper.getTrack
};

let query = new GraphQLObjectType({
  name: 'Root',
  fields: {
    albums: albums,
    album: album,
    artists: artists,
    artist: artist,
    tracks: tracks,
    track: track
  }
});

export default new GraphQLSchema({query: query});
