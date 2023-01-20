const ADD_POSTS = 'ADD-POSTS'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState =  {
    newPostText: '',
        myPosts: [
        {name: 'Henry!', message: 'Давай ты сможешь!', likesCount: 1},
        {name: 'igor!', message: 'Давай ты сможешь!', likesCount: 2},
        {name: 'Hugo!', message: 'Давай ты сможешь!', likesCount: 3},
        {name: 'Impact!', message: 'Давай ты сможешь!', likesCount: 4},
        {name: 'Raim!', message: 'Давай ты сможешь!', likesCount: 5},
    ],}


const ProfileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POSTS : {
            let newPost = {name:'K', message:'Hello World', likesCount:1}
            let state = {...state}

        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.payload
        }
        default: return state
    }
}
export default ProfileReducer;
// }
// let newPost = {
//     name: 'k8',
//     message: state.ProfilePage.newPostText,
//     likescount: 0
// const profileReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_POSTS: {
//             let newPost =
//             state.myPosts.push(newPost)
//             state.newPostText = ''
//         }
//         case UPDATE_NEW_POST_TEXT: {
//             state.newPostText = action.newText;
//         }
//         default:
//             return state
//     }}
//
// export const addPostActionCreator = () => ({type:'ADD-POSTS'})
// export const updateNewPostTextCreator = () => ({type: UPDATE_NEW_POST_TEXT,})
