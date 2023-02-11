// import axios from "axios";
//
//
// const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     headers:     {
//         "API-KEY": "5c6dad2f-22ca-4223-9454-8114bc88c9d6"
//     }
// });
//
// export const profileApi = {
//     getProfile(){
//         return instance.get("").then(resp => {
//             return resp.data
//         })
//     },
//     getStatus(userId) {
//         return instance.get(`profile/status/` + userId)
//     },
//     updateStatus(status) {
//         return instance.put(`profile/status/`, {status:status})
// }}