const { gql } = require("apollo-server-express");

// broken queries, pls resolve before adding back into typeDefs
// item(User):item
//     location(user:[location]!): Location 

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    phone: String
    location: String
    savedItems: [Item]
    postedItems: [Item]
  }

  type Item {
    _id: ID
    title: String
    description: String
    createdAt: String
    status: String
    address: String
    quantity: String
    username: String
    coordinates: [Coordinates]
  }
  type Coordinates {
    _id: ID
    longitude: String
    latitude: String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    items(title: String): [Item]
    item(_id: ID!): Item
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addItem(title: String!, description: String!, status: String!, address: String!, quantity: String!): Item 
    saveItems(
      title: String!
      description: String!
      image: String!
      status: String!
      quantity: String
    ): User
    deleteItem(title: String!, description: String!, status: String!, address: String!, quantity: String!, username: String!): Item
    searchItems(title: String!): User
    updateItem(title: String, description: String, status: String: address: String, quantity: String): Item
  }
`;
// export the typeDefs
module.exports = typeDefs;
