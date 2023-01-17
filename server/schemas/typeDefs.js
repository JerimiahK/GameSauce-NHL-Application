const { gql } = require("apollo-server-express");


const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    email: String
    finances: [FinancialData]!
  }
`;