import {createSelectorHook} from "react-redux";

export const authSelector = state => {
    return state.Auth.IsAuth
}
export const statusSelector = state => {
    return state.Profile.status
}
export const postsSelector = state => {
    return state.Profile.posts
}

export const FilteredVipUsers = createSelectorHook(postsSelector, (users) => {
    console.log('Render')
    return users.Profile.posts
})