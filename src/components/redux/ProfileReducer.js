const SET_USER_PROFILE = "SET_PROFILE"
const defaultState = {
    alert:'',
    newPostText: "",
    myPosts: [
        {name:'Henry', message:'Hello world!', likesCount:1},
        {name:'Bind', message:'Hello world!', likesCount:1},
        {name:'Jake', message:'Hello world!', likesCount:1},
    ],
    profile: null
}
const ProfileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
            console.log('Dating...')}
        default:
            return state
            alert('Bruh')

}}

export const setUsersProfile = profile => ({type:SET_USER_PROFILE, profile})
export default ProfileReducer;
