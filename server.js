import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema/index';

let app  = express();
let port = 3000;

app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }));

let server = app.listen(port, function () {
  let host = server.address().address;

  console.log('GraphQL listening at http://%s:%s', host, port);
});
