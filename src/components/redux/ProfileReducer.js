const ADD_POSTS = 'ADD-POSTS'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const profileReducer = (state, action) => {
    if (action.type === ADD_POSTS ) {
        let newPost = {
            name: 'k8',
            message: state._state.ProfilePage.newPostText,
            likescount: 0}
        state.myPosts.push(newPost)
        state.newPostText = ''
        alert('sayHello')
    } else if (action.type === UPDATE_NEW_POST_TEXT){
        state.newPostText = action.newText;
    }

    return state
}

export default profileReducer;