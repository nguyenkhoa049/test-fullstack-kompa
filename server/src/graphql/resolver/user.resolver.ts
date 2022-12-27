import { createUser } from './../../services/users.service';
import { findAllUsers, findUserById } from "../../services/users.service";

export const userResolver = {
    Query: {
        users: async () => await findAllUsers(),
        user: async (id: string) => await findUserById(id),
    },

    Mutation: {
        createUser: async (parent: any, args: any) => await createUser(args),
    }
};
