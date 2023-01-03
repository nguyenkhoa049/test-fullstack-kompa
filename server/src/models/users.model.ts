import mongoose from "mongoose";
import { User } from "../types/user";
const Schema = mongoose.Schema;

const UsersSchema =  new Schema<User>({
    name: String,
    username: String,
    password: String,
    sex: Boolean,
    email: String,
    phone: String,
    address: String,
    department: String,
    accessToken: String,
}, {
    collection: 'users'
});

export const Users = mongoose.model('users', UsersSchema);