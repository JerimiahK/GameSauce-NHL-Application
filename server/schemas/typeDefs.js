const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    password: String
    email: String
    favoriteTeams: [favoriteTeams]!
  }

  type favoriteTeams {
    favoriteTeams: String
  } 

  type Logout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: [User]!
  }

  type Mutation {
    addUser(password: String!, email: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
