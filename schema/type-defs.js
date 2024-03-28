const { gql } = require('apollo-server'); //gql allows us to write pure GraphQL code

const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: String!
    }

    type Query {
        users: [User!]!
    }
`;
module.exports = {typeDefs}