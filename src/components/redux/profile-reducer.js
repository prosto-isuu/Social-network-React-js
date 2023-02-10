const ADD_NEW_POST = "ADD_NEW_MESSAGE"
const defaultState = {
    myPosts: [
        {name:'Henry', message:'Hello world!', likesCount:1},
        {name:'Ilyas', message:"😍", likesCount: 45},
        {name:'Arafat', message:"Хоршое получилось фото!", likesCount: 45},],
    profile: null
}
const ProfileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            return {
                ...state, myPosts: [...state.myPosts, ...action.payload]
            }
        }
        default:
            return state
}}

export const AddMessages = (payload) => ({type:ADD_NEW_POST, payload})
export default ProfileReducer;
