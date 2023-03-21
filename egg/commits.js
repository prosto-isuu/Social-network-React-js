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
// let initialState =  {
//     newPostText: '',
//         myPosts: [
//         {name: 'Henry!', message: 'Давай ты сможешь!', likesCount: 1},
//         {name: 'igor!', message: 'Давай ты сможешь!', likesCount: 2},
//         {name: 'Hugo!', message: 'Давай ты сможешь!', likesCount: 3},
//         {name: 'Impact!', message: 'Давай ты сможешь!', likesCount: 4},
//         {name: 'Raim!', message: 'Давай ты сможешь!', likesCount: 5},
//     ],}
//
// const ProfileReducer = (state, action) => {
//     switch (action.type) {
//         case ADD_POSTS : {{
//             let newPost = {name:'K', message:'Hello World', likesCount:1}
//             let stateCopy = {...state}
//             stateCopy.posts = [...state.posts]
//             stateCopy.posts.push(newPost)
//             state.newPostText = ''
//             return stateCopy
//         }}
//         case UPDATE_NEW_POST_TEXT: {
//             let stateCopy = {...state}
//             stateCopy = {...state.newPostText}
//             stateCopy.newPostText = '';
//             return stateCopy
//
//         }
//         default: return state
//     }
// }
// // const SEND_MESSAGE = 'SEND_MESSAGE'
// // const UPDATE_NEW_MESSAFE_BODY = 'UPDATE_NEW_MESSAFE_BODY'
// //
// // let initialState = {
// //     users: [
// //
// //         {name: 'Oleg', id: 2},
// //         {name: 'Ayana', id: 3},
// //         {name: 'Andrey', id: 4},
// //     ],
// //         myMessage: [
// //
// //     {name: 'Nurbo', message: 'Hello how are you?'},
// //     {name: 'Elayum', message: 'I`m Good!'},
// //     {name: 'Nurjigit', message: 'Hello how are you?'},
// // ],
// //     newMessageBody : 'Message',
// //
// // }
// const dialogsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case UPDATE_NEW_MESSAFE_BODY : {
//             state.newMessageBody = action.body;
//         }
//         case SEND_MESSAGE : {
//             let body =  state.newMessageBody = action.body;
//             state.newMessageBody = action.body = '';
//             let newMessage = {name:1, message:body}
//             state.myMessage.push(newMessage)
//         }
//
//         default: return state
//     }
// }
// export const updateNewMessageBody = (body) => ({type:UPDATE_NEW_MESSAFE_BODY,body:body})
//
// export const sendMessageCreator = () => ({type: SEND_MESSAGE,})
//
//
// export default dialogsReducer;

// export const DialogsItem = (props) => {
//     const mappingUsers = props.users.map( i => {
//         return <NavLink to={i.id} className={s.nav}>{i.name}</NavLink>
//     })
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//
//     }
//     let onNewMessageChange = (event) => {
//         let body = event.target.value
//         props.store.dispatch(updateNewMessageBody(body))
//     }
//     return (
//         <div className={s.item}>
//             <div>{mappingUsers}</div>
//             <div>
//                 <div><textarea placeholder="enter your messages" value={props} onChange={onNewMessageChange}></textarea></div>
//                 <div><button onClick={onSendMessageClick}>Send messages</button></div>
//             </div>
//         </div>
//     )
// }
//
// const mappingUsers = props.users.map( i => {
//     return <NavLink to={i.id} className={s.nav}>{i.name}</NavLink>
// })
// let onSendMessageClick = () => {
//     props.store.dispatch(sendMessageCreator())
//
// }
// let onNewMessageChange = (event) => {
//     let body = event.target.value
//     props.store.dispatch(updateNewMessageBody(body))
// }
import {NavLink} from "react-router-dom";
// import {sendMessageCreator, updateNewMessageBody} from "../../redux/DialogsReducer";
// import s from "./components/Dialogs/DialogsMessage/DialogsMessage.module.css";
// import React from "react";
// // import store from "./components/redux/redux-store";
// // // import store from "./components/redux/redux-store";
// // // // const rerenderEntireTree = (state) => {
// // //     //
// // // // console.log(state)
// // // let state = store.getState()
// // let state = store.getState()
//
// <div className={s.navbar}>
//     <div className={s.dialogs}>
//         {mappingMessage}
//     </div>
// </div>

// export default ProfileInfoContainer;
//
//
// const refs = React.createRef()
// let addPosts = () => {
//     props.store.dispatch(addPostActionCreator())
// }
// // const onChange = () => {
// //     let text = refs.current.value
// //     props.store.updateNewPostTextCreator(text)}
// // const mapingUsers = props.store._state.myPost.map( i => {
// //     return <div>{i.name}</div>
// // })
//
// console.log(mapingUsers)
//
// const DialogsItemsContainer = (props) => {
//     return (
//        <DialogsItem/>
//     )
// }


// state.DialogsPage.users.map( i => {
//     return <div>{i.name}</div>
// })

// console.log(props.store.getState().DialogsPage.users)
// import UsersApi from "./UsersApi";
// import Users from "./Users";
//
//
// // import React from 'react'
// // import axios from "axios";
// //
// //
// // class UsersApiComponent extends React.Component {
// //     componentDidMount() {
// //         axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
// //             this.props.setUser(response.data.items);
// //             this.props.setTotalUsersCount(response.data.totalCount)
// //         })
// //     };
// //
// //     onPageChanged = (pageNumber) => {
// //         this.props.setCurrentPage(pageNumber)
// //     }
// //
// //     render() {
// //         return (
// //             <div>
// //                 {console.log(this.props)}
// //             </div>
// //             // {console.log(this.props)}
// //             // <Users totalUsersCount={this.props.TotalUsersCount} pageSize={this.props.PageSize
// //             // onPageChanged={this.props.} users={this.props.users}
// //             //     follow={this.props.users}
// //             //     unfollow={this.props.users}}/>
// //         )
// //
// //     }
// // }
// //
// //
// // //     onPageChanged = (e) => {
// // // class UsersComponents extends React.Component{
// // //
// // //     componentDidMount() {
// // //
// // //     }
// // //         //
// // //     onChanged = (pageNumber) => {
// // //     this.props.setCurrentPage(pageNumber)
// // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.pageNumber}&count=${this.props.PageSize}`).then( response => response => {
// // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.pageNumber}&count=${this.props.PageSize}`).then( response => response => {
// // // //             this.props.setUser(response.date.items)
// // //         })
// // // }
// //
// //
// // export default UsersApiComponent;