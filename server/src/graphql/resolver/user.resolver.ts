import { createUser, loginUser } from './../../services/users.service';
import { findAllUsers, findUserById } from "../../services/users.service";

export const userResolver = {
    Query: {
        users: async () => await findAllUsers(),
        currentUser: async (parent: any, args: any, { id }) => await findUserById(id),
    },

    Mutation: {
        createUser: async (parent: any, args: any) => await createUser(args),
        loginUser: async (parent: any, args: any) => await loginUser(args),
    }
};
