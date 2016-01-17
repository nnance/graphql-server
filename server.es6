import express from 'express';
import graphqlHTTP from 'express-graphql';
import {GraphQLSchema} from 'graphql';
import {GraphQLObjectType} from 'graphql';
import {GraphQLString} from 'graphql';

let app  = express();
let PORT = 3000;

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});

app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }));

let server = app.listen(PORT, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});
