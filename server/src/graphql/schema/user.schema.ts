import { buildSchema } from "graphql";

export const userSchema = buildSchema(`
  type User {
    id: ID
    name: String
    username: String
    password: String
  }

  type Query {
    users: [User]
    user (id: ID!): User
  }

  type Mutation {
    createUser(name: String, username: String, password: String): User
  }
`);