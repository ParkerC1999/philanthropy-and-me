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

    type Favorites {
        _id: ID
        organizations: [Organization]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        donate(organizations: [ID]!): Donate
        categories: [Category]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        updateUser(username: String, email: String, password: String): Auth
        addFavorite(organizations: [ID]!): Favorite
    }
    type Donate {
        session: ID
      }
`;

module.exports = typeDefs;