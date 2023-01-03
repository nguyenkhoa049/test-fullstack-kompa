import { User, LoginUser, LoginResponse, Response } from '../types/user';
import { Users } from './../models/users.model';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const findAllUsers = async () => await Users.find();

export const findUserById = async (id: string) => await Users.findById(id);

export const loginUser = async (data: LoginUser): Promise<LoginResponse> => {
    const user = await Users.findOne({ username: data.username })
    if (user) {
        const compared = await bcrypt.compare(data.password, user.password)
        if (compared) {
            const accessToken = jwt.sign({ id: user.id }, process.env.SALT_HASH_PASSWORD)
            await Users.findByIdAndUpdate(user.id, { accessToken })
            return {
                message: "Login success",
                accessToken,
                success:true
            }
        }
        return {
            message: "Wrong password",
            success:false
        }
    }
    return {
        message: "User isn't exist",
        success: false
    }
}

export const createUser = async (data: User): Promise<Response> => {
    const user = new Users(data)
    const hashed = await bcrypt.hash(user.password, +process.env.SALT_HASH_PASSWORD)
    if(hashed) {
        user.password = hashed
        const data = await user.save();
        return {
            message: "Create user success",
            data
        }
    }
    return {
        message: "Create user fail",
    }
}