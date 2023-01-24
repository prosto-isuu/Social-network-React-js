// import profileReducer from "./ProfileReducer";
//
// let store = {
//     _state: {
//         ProfilePage: {
//             newPostText: '',
//             myPosts: [
//                 {name: 'Henry!', message: 'Давай ты сможешь!', likesCount: 1},
//                 {name: 'igor!', message: 'Давай ты сможешь!', likesCount: 2},
//                 {name: 'Hugo!', message: 'Давай ты сможешь!', likesCount: 3},
//                 {name: 'Impact!', message: 'Давай ты сможешь!', likesCount: 4},
//                 {name: 'Raim!', message: 'Давай ты сможешь!', likesCount: 5},
//             ],
//         },
//         DialogsPage: {
//             users: [
//                 {name: 'Dima', id: 1},
//                 {name: 'Oleg', id: 2},
//                 {name: 'Ayana', id: 3},
//                 {name: 'Andrey', id: 4},
//             ],
//             myMessage: [
//                 {name: 'Dastan', message: 'Hello how are you?'},
//                 {name: 'Nurbo', message: 'Hello how are you?'},
//                 {name: 'Elayum', message: 'I`m Good!'},
//                 {name: 'Nurjigit', message: 'Hello how are you?'},
//             ],
//             newMessageBody : 'Message',
//
//         },
//         sidebar: {}
//     },
//     getState: () => {
//         return store._state
//     },
//     callSubscriber: () => {
//         alert('state is Changed')
//     },
//     subscribe(observer) {
//         store.callSubscriber = observer
//     },
//     dispatch: (action) => {
//        this._state.ProfilePage =  profileReducer(this._state.ProfilePage, action)
//        this._state.DialogsPage =  profileReducer(this._state.DialogsPage, action)
//        this.sidebar =  profileReducer(this.sidebar, action)
//        this.callSubscriber(this._state)
//     },
//
// }
//
// export const actionCretor = {
//     type:'UPDATE_NEW_MESSAFE_BODY'
// }
//
// export default store;