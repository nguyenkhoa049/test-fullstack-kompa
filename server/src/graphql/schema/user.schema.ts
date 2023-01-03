import { buildSchema } from "graphql";

export const userSchema = buildSchema(`
  type User {
    id: ID
    name: String
    username: String
    password: String
    sex: Boolean
    email: String
    phone: String
    address: String
    department: String
  }

  type ResponseLogin {
    message: String!
    accessToken: String
    success: Boolean
  }

  type UserCreated {
    id: ID
    name: String
    username: String
    sex: Boolean
    email: String
    phone: String
    address: String
    department: String
  }

  type ResponseCreate {
    message: String!
    data: UserCreated
  }

  type Query {
    users: [User]
    currentUser: User
  }

  type Mutation {
    createUser(
      name: String, 
      username: String, 
      password: String,  
      sex: Boolean,
      email: String,
      phone: String,
      address: String,
      department: String
    ): ResponseCreate
    loginUser(
      username: String, 
      password: String,
    ): ResponseLogin
  }
`);