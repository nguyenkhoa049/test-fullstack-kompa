import { gql } from '@apollo/client';

export const GET_CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      name
      password
      username
      id
      sex
      email
      phone
      address
      department
    }
  }
`;