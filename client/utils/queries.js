import { gql } from '@apollo/client';

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

export const QUERY_USER = gql` 

`