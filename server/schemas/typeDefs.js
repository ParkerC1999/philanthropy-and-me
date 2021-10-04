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
        favorites: [Favorite]
    }

    type Favorite {
        _id: ID
        organizations: [Organization]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        donate(organizations: [ID]!): Donate
        categories: [Category]
        favorite(_id: ID!): Favorite
        organizations(category: ID, name: String): [Organization]
        organization(_id: ID!): Organization
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