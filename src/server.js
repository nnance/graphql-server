import { Console } from 'console';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema/index';

let logger = new Console(process.stdout, process.stderr);
let app  = express();
let port = 3000;

app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }));

let server = app.listen(port, function () {
  let host = server.address().address;

  logger.log('GraphQL listening at http://%s:%s', host, port);
});
