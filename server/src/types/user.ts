export interface User {
    id?: string
    name: string
    password?: string
    username: string
    sex: boolean
    email: string
    phone: string
    address: string
    department: string
    accessToken: string
}

export interface LoginUser {
    username: string
    password: string
}

export interface LoginResponse {
    message?: string
    accessToken?: string
    success?: boolean
}

export interface Response {
    message?: string
    data?: any
}