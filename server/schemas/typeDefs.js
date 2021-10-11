const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User{
    _id:ID
    username:String
    email:String
    phone:String
    location:String
    savedItems:[Items]
    donation:[Items]
}

type Items {
    title: String
    description: String
    image: String
    status: String
    quantity: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth 
    saveItems(title: String!, description: String!, image: String!, status: String!,quantity:String): User
    searchItems(title: String!): User
  }
`;
// export the typeDefs
module.exports = typeDefs;