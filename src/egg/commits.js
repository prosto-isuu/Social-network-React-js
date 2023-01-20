
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