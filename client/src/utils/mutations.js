import { gql } from '@apollo/client';

export const LOGIN_USER = gql `
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql `
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_ITEM = gql `
mutation addItem($title: String!, $description: String!, $status: String!, $address: String!, $quantity: String!) {
    addItem(title: $title, description: $description, status: $status, address: $address, quantity: $quantity) {
      title
      description
      status
      address
      quantity
      username
      createdAt
      coordinates {
        longitude
        latitude
      }
    }
  }
`