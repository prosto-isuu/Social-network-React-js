import axios from "axios";

export const PostsApi = {
    getPosts: async post => {
        const response = await axios.get("https://social-network.samuraijs.com/api/1.0/users")
        console.log(response)
        return response.data.data

    }
}