// import React, {useEffect, useRef, useState} from 'react'
// import s from './OtherPosts.module.css'
// import {connect, useDispatch, useSelector} from "react-redux";
// import {setPostFromProfile} from "../../../../redux/profile-reducer";
// import axios from "axios";
// import { BiLike } from 'react-icons/bi';
// import { TfiCommentAlt } from 'react-icons/tfi';
// import {compose} from "redux";
//
//
//
// const OtherPosts = (props) => {
//     const [likes, setLikes] = useState(2)
//     const [posts, setPosts] = useState([])
//     const [comment, setComment] = useState('')
//     useEffect(() => {
//         const response = axios.get("https://jsonplaceholder.typicode.com/posts").then( res => {
//             setPosts(res.data)
//         })
//
//     }, [])
//
//     const onAddLike = () => {
//         setLikes(value => value + 1)}
//
//     function onCommentPost(event) {
//         const newComment = event.target.value
//         setComment(newComment)
//     }
//
//     function onSetChangeComment(event) {
//         let newComment = event.target.value
//         setComment(newComment)
//     }
//
//     let refFromInput = useRef()
//
//     function onSetComment() {
//         const comment = refFromInput.current.value
//         console.log(comment)
//         props.setNewComment({id:Date.now(), name:'Artur', body:comment})
//         console.log(props)
//     }
//
//     const transformationComments = props.Comments.comments.map((value, index, array) => {
//         return <div>
//             <div>{`Комментарии: ${value.body}`}</div>
//             <div>{`Пользователь: ${value.name}`}</div>
//             <div>{`Айди: ${value.id}`}</div>
//         </div>
//     })
//
//     const transformationPosts = posts.map((value, index, array) => {
//         return <div>
//             <div className={s.img}>
//                 <div className={s.title}>{value.body}</div>
//         <img src="https://4kwallpapers.com/images/walls/thumbs_3t/5865.jpg"/>
//         <div className={s.interactionBlock}>
//             <div><button><BiLike/>{`Нравится | ${value.id}`}</button></div>
//             <div className={s.comment}><TfiCommentAlt/>{transformationComments}</div>
//         </div>
//         <div className={s.active}>
//             <div>
//                 <input type="text" onChange={onSetChangeComment} value={comment} ref={refFromInput}/>
//                 <button onClick={onSetComment}>Отправить комментарии</button>
//             </div>
//         </div>
//     </div>
//         </div>
//     })
//
//
//     return (
//         <div className={s.myPosts}>
//     <div className={s.img}>
//         <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
//         <div className={s.interactionBlock}>
//             <div><button
//             onClick={onAddLike}
//             ><BiLike/>{`Нравится | ${likes}`}</button></div>
//             <div><button
//             ><TfiCommentAlt/>{`Комментарии | ${comment}`}</button></div>
//         </div>
//         <div className={s.active}>
//             <div>
//                 <input type="text" onChange={onCommentPost} />
//             </div>
//         </div>
//     </div>
//     {/*{transformationPosts}*/}
//         </div>
//
//     );
// };
//
//
//
// export default compose(
//     connect(),
// )(MyGallery);
// // export default Posts;

import React from 'react'
import s from './OtherPosts.module.css'
const OtherPosts = (props) => {
    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default OtherPosts;