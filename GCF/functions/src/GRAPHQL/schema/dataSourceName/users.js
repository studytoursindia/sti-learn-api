const { gql } = require('apollo-server-cloud-functions');

const typeDef = gql`
  type User {
    serial_no: Int!
    uuid: String!
    fullname: String!
    age: String
    gender: String
    mobile: String
    email: String!
    address: String
    user_type: UserType!
  }

  enum UserType {
    user
    paid_user
    tour_guide
  }

  extend type Query {
    getUser(uuid: String!): User
  }
  extend type Mutation {
    addUser(
      uuid: String!
      fullname: String!
      email: String!
      mobile: String!
      age: String!
      gender: String!
    ): ErrorMessage!
    updateUser(
      uuid: String!
      fullname: String
      age: String
      gender: String
      mobile: String
      address: String
      email: String
    ): ErrorMessage!
    # disableUser: ErrorMessage!
  }
`;
const resolvers = {
  Query: {
    getUser: async (_, { uuid }, ctx) => {
      try {
        // load data from database
        return {
          serial_no: 1,
          uuid: 'dfjhsjf32435mcvhjf45mn6njk56',
          fullname: 'Sagar Patel',
          age: '24',
          gender: 'male',
          mobile: '9232323223',
          email: 'abc@email.com',
          address: 'Red fort , delhi, IN',
          user_type: 'free',
        };
        // eslint-disable-next-line no-unreachable
      } catch (error) {
        console.log(error.toString());
        return null;
      }
    },
  },
  Mutation: {
    addUser: async (_, args, ctx) => {
      try {
        // add user in databse ( if any error occures catch block is executed )
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
    updateUser: async (_, args, ctx) => {
      try {
        // update a user
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
