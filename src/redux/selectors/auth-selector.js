export const authSelector = state => {
    return state.Auth.IsAuth
}
export const statusSelector = state => {
    return state.Profile.status
}
export const postsSelector = state => {
    return state.Profile.posts
}