import axios from "axios";

export const PostsApi = {
    getPosts: () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            return response.data
        })
    }
}