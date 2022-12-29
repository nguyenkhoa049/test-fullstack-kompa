import { createUser } from './../../services/users.service';
import { findAllUsers, findUserById } from "../../services/users.service";

export const userResolver = {
    Query: {
        getUsers: async () => await findAllUsers(),
        getUser: async (parent: any, { id }: any) => await findUserById(id),
    },

    Mutation: {
        createUser: async (parent: any, args: any) => await createUser(args),
    }
};
