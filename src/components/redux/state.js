const ADD_POSTS = 'ADD-POSTS'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POSTS'
let store = {
    _state: {
        ProfilePage: {
            newPostText: '',
            myPosts: [
                {name: 'Henry!', message: 'Давай ты сможешь!', likesCount: 1},
                {name: 'igor!', message: 'Давай ты сможешь!', likesCount: 2},
                {name: 'Hugo!', message: 'Давай ты сможешь!', likesCount: 3},
                {name: 'Impact!', message: 'Давай ты сможешь!', likesCount: 4},
                {name: 'Raim!', message: 'Давай ты сможешь!', likesCount: 5},
            ],
        },
        DialogsPage: {
            users: [
                {name: 'Dima', id: 1},
                {name: 'Oleg', id: 2},
                {name: 'Ayana', id: 3},
                {name: 'Andrey', id: 4},
            ],
            myMessage: [
                {name: 'Dastan', message: 'Hello how are you?'},
                {name: 'Nurbo', message: 'Hello how are you?'},
                {name: 'Elayum', message: 'I`m Good!'},
                {name: 'Nurjigit', message: 'Hello how are you?'},
            ],
        },
        sidebar: {}
    },
    getState: () => {
        return store._state
    },
    callSubscriber: () => {
        alert('state is Changed')
    },
    subscribe(observer) {
        store.callSubscriber = observer
    },
    dispatch: (action) => {
        if (action.type === ADD_POSTS ) {
            let newPost = {
                name: 'k8',
                message: store._state.ProfilePage.newPostText,
                likescount: 0

            }
            store._state.ProfilePage.myPosts.push(newPost)
            store._state.ProfilePage.newPostText = ''
            store.callSubscriber(store._state)
            alert('sayHello')
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            store._state.ProfilePage.newPostText = action.newText;
            store.callSubscriber()
        } else {
            alert('I dont Know')
        }
    },

}

export const addPostActionCreator = () => {
    return {
        type:'ADD-POSTS'
    }}
export const updateNewPostTextCreator = () => {
    return {
        type:'UPDATE-NEW-POSTS',
    }
}
export default store;