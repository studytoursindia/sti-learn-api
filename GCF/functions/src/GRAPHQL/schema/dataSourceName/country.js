const { gql } = require('apollo-server-cloud-functions');
const { db } = require('./../../database/db');

const typeDef = gql`
  type Country {
    id: Int!
    name: String!
  }

  extend type Query {
    getCountryList: [Country]
  }
  extend type Mutation {
    addCountry(name: String!): ErrorMessage!

    updateCountry(id: String!, name: String): ErrorMessage!
    # disableUser: ErrorMessage!
  }
`;
const resolvers = {
  Query: {
    getCountryList: async (_, { uuid }, ctx) => {
      try {
        // load data from database
        const result = await db.country.findAll(); // select * from
        console.log(result);
        return result;
        // eslint-disable-next-line no-unreachable
      } catch (error) {
        console.log(error.toString());
        return null;
      }
    },
  },
  Mutation: {
    addCountry: async (_, args, ctx) => {
      try {
        const { name } = args;
        // const lastentry = await db.country.findAll({
        //   limit: 1,
        //   order: [['id', 'DESC']],
        // });
        const result = await db.country.create({ name }); // INSERT

        return {
          error: false,
          message: 'Added Successfully',
        };
        // eslint-disable-next-line no-unreachable
      } catch (error) {
        console.log(error.toString());
        return {
          error: true,
          message: 'Ooops... Some Error Occured. Please try again',
        };
      }
    },
    updateCountry: async (_, args, ctx) => {
      try {
        // update a country
        //const obj = await db.country.findByPk({

        const obj = await db.country.findOne({
          // select
          where: { id: args.id },
        });

        if (obj === null) {
          throw new Error('Country Not Found');
        }

        Object.assign(obj, args);

        // obj.name = args.name;

        await obj.save(); // update

        return {
          error: false,
          message: 'Updated Successfully',
        };
        // eslint-disable-next-line no-unreachable
      } catch (error) {
        console.log(error.toString());
        return {
          error: true,
          message: 'Ooops... Some Error Occured',
        };
      }
    },
  },
};
module.exports = {
  typeDef: typeDef,
  resolvers: resolvers,
};
