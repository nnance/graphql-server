import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';
import fetch from 'node-fetch';

import album from './types/album';

let query = new GraphQLObjectType({
  name: 'Root',
  fields: {
    albums: {
      type: new GraphQLList(album),
      resolve: () => {
        return fetch('http://ws.spotify.com/search/1/album.json?q=foo')
          .then(function(res) {
            console.log('fetch status: %s', res.status);
            return res.json();
          })
          .then(function(json){
            return json.albums;
          });
      }
    }
  }
});

export default new GraphQLSchema({query: query});
