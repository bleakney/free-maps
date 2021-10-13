import { gql } from "graphql-tag";

export const QUERY_ITEMS = gql`
  query items($username: String) {
    items(username: $username) {
      _id
      title
      description
      image
      status
      quantity
    }
  }
`;

export const QUERY_ITEM = gql`
  query item($id: ID!) {
    item(_id: $id) {
      _id
      title
      description
      image
      status
      quantity
    }
  }
`;

export const QUERY_USER = gql` 
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      phone
      location
      savedItems {
        title
        description
        image
        status
        quantity
      }
      donation {

      }
    }
  }
`;
