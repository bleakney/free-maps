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

type Book {
    authors: [String]
    description: String
    bookId: String
    image: String
    title: String
    link: String
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
    saveBook(authors: [String], description: String!, title: String!, bookId: String!, image: String, link: String): User
    removeBook(bookId: String!): User
  }
`;
// export the typeDefs
module.exports = typeDefs;