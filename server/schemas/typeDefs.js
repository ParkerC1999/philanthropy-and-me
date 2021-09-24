const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Category {
        _id: ID
        name: String
        description: String
    }

    type Organization {
        _id: ID
        name: String
        description: String
        site: String
        category: [Category]
    }

    type User {
        _id: ID
        username: String
        email: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {

    }

    type Mutation {

    }
`;

module.exports = typeDefs;