import { User } from '../types/user';
import { Users } from './../models/users.model';

export const findAllUsers = async () => await Users.find();

export const findUserById = async (userId: String) => await Users.findById(userId);

export const createUser = async (data: User) => {
    const user = new Users(data)
    return await user.save();
}