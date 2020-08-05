const functions = require('firebase-functions');

const { ApolloServer } = require('apollo-server-cloud-functions');
const { schema } = require('./schema');

// let whitelist;

// if(process.env.NODE_ENV !== 'production'){
//    whitelist = ['http://localhost:3000','https://studytoursindia.com']
// }
// else{
//   whitelist = ['https://studytoursindia.com']
// }

const server = new ApolloServer({
  schema,
  // context: async ({ event, context }) => ({
  //   headers: event.headers,
  //   user: await getUser(event),
  //   event,
  //   context,
  // }),
  // playground: {
  //   endpoint: '/graphql',
  // },
  playground: true,
  introspection: true,
});

const apolloHandler = server.createHandler({
  //   cors: {
  //       origin: true,
  //       credentials: true,
  //       allowedHeaders: whitelist
  //     },
});

exports.api = functions.https.onRequest(apolloHandler);
