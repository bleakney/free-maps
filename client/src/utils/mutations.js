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
mutation addItem($title: String!, $description: String!, $status: String!, $address: String!, $city: String!, $state: String!, $zipcode: String! $quantity: String!) {
    addItem(title: $title, description: $description, status: $status, address: $address, city: $city, state: $state, zipcode: $zipcode, quantity: $quantity) {
      _id
      title
      description
      status
      address
      city
      state
      zipcode
      quantity
      username
      createdAt
      coordinates {
        longitude
        latitude
      }
    }
  }
`;

export const ADD_COORDINATES = gql `
mutation addCoordinates($itemId: ID!, $latitude: String!, $longitude: String!) {
    addCoordinates (itemId: $itemId, latitude: $latitude, longitude: $longitude ) {
      _id
      title
      description
      createdAt
      status
      address
      city
      state
      zipcode
      quantity
      username
      coordinates {
        longitude
        latitude
      }
    }
  }
`;

export const DELETE_ITEM = gql `
mutation deleteItem($_id: ID!) {
  deleteItem(_id: $_id) {
    _id
  }
}
`;
// export const DELETE_ITEM = gql `
// mutation deleteItem($title: String!, $description: String!, $status: String!, address: String!, quantity: String!, username: String!) {
//     addItem(title: $title, description: $description, status: $status, address: $address, quantity: $quantity){
//         user {
//             _id
//             username
//         },
//         item {
//             _id
//             title
//             description
//             status
//             address
//             quantity
//         }
//     }
// }`

// export const SAVE_ITEM = gql `
// mutation saveItem($title: String!, $description: String!, $status: String!, address: String!, quantity: String) {
//     addItem(title: $title, description: $description, status: $status, address: $address, quantity: $quantity){
//         user {
//             _id
//             username
//         },
//         item {
//             _id
//             title
//             description
//             status
//             address
//             quantity
//         }
//     }
// }`
