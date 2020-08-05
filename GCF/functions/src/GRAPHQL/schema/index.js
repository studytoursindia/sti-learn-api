const { gql } = require('apollo-server-cloud-functions');
const { GraphQLDate, GraphQLDateTime } = require('graphql-iso-date');
const { GraphQLJSON } = require('graphql-type-json');
const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');
const userTypedef = require('./dataSourceName/users').typeDef;
const userResolver = require('./dataSourceName/users').resolvers;
const countryTypedef = require('./dataSourceName/country').typeDef;
const countryResolver = require('./dataSourceName/country').resolvers;
const destTypedef = require('./dataSourceName/destination').typeDef;
const destResolver = require('./dataSourceName/destination').resolvers;

//all common typedefs to be declared here
const typeDef = gql`
  scalar DateTime
  scalar Date
  scalar JSON
  type Query
  type Mutation
  type ErrorMessage {
    error: Boolean!
    message: String
  }
`;
const resolvers = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  JSON: GraphQLJSON,
};

module.exports.schema = makeExecutableSchema({
  typeDefs: [typeDef, userTypedef, countryTypedef, destTypedef], // add schemas here
  resolvers: merge(resolvers, userResolver, countryResolver, destResolver),
});

// module.exports.schema = applyMiddleware(
//   makeExecutableSchema({
//     typeDefs: [typeDef, userTypedef], // add schemas here
//     resolvers: merge(resolvers, userResolver),
//   })

//   //  middlewares if any
// );
