const { gql } = require('apollo-server-cloud-functions');
const { db } = require('./../../database/db');

const typeDef = gql`
  type Destination {
    id: Int!
    name: String
    img: String
    description: String
  }

  extend type Query {
    getDestination(name: String!): Destination
    getAllDestination: [Destination]
  }
`;
const resolvers = {
  Query: {
    getDestination: async (_, args, ctx) => {
      try {
        // load data from database
        const result = await db.destinations.findOne({
          where: { name: args.name },
        });
        console.log(result);
        return result;
        // eslint-disable-next-line no-unreachable
      } catch (error) {
        console.log(error.toString());
        return null;
      }
    },
    getAllDestination: async (_, args, ctx) => {
      try {
        // load data from database
        const result = await db.destinations.findAll();
        console.log(result);
        return result;
        // eslint-disable-next-line no-unreachable
      } catch (error) {
        console.log(error.toString());
        return null;
      }
    },
  },
};
module.exports = {
  typeDef: typeDef,
  resolvers: resolvers,
};
