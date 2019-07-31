const { gql } = require("apollo-server-lambda");
export const typeDefs = gql`
  type Query {
    hello: String
  }
`;
