import { gql } from '@apollo/client';

const GET_USER = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;