import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation LoginUser($username: String, $password: String) {
    loginUser(username: $username, password: $password) {
      accessToken
      message
      success
    }
  }
`;