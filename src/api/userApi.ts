import axios, {Axios} from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5c6dad2f-22ca-4223-9454-8114bc88c9d6"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId: number) {
        return instance.post<Axios>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
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

export const profileAPI =
    {
        getProfile(userId: number){
            return instance.get(`profile/` + userId);
        },
        getStatus(userId: number) {
            return instance.get(`profile/status/` + userId);
        },
        updateStatus(status: string) {
            return instance.put(`profile/status`, {status: status});
        },
    }

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}


authAPI.me().catch((res: number) => res)
