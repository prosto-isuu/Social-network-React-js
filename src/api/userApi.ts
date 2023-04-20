import axios, {AxiosInstance} from "axios";
import {UserType} from "../redux/users-reducers";

interface UserResponseType {
    items: Array<UserType>,
    totalCount: number,
    error: string | null
}



const instance: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5c6dad2f-22ca-4223-9454-8114bc88c9d6"
    }
});


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10): Promise<UserResponseType> {
        return instance.get<UserResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId: number): Promise<AxiosInstance> {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number): Promise<AxiosInstance> {
        return instance.delete(`follow/${userId}`)
    },
}

export const profileAPI = {
    getProfile(userId: number): Promise<AxiosInstance> {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: number): Promise<{data: {status: string}}> {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string): Promise<AxiosInstance> {
        return instance.put(`profile/status`, {status: status}) as Promise<AxiosInstance>;
    },
}

export const authAPI = {
    me(): Promise<{data: {id: number, email: string, login: string}}> {
        return instance.get(`auth/me`)
    }
}



type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: object
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
    photos: object
    small: string
    URLsmall : number;

    large: string
    URL:null
}
