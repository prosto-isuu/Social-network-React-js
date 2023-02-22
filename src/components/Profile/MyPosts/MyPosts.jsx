import React, {useEffect, useState} from 'react'
import s from './MyPosts.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setPostFromProfile} from "../../../redux/profile-reducer";
import axios from "axios";

const MyPosts = (props) => {
    const [users, setUsers] = useState([])
    // useEffect( r => {
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //         setUsers(response.data)
    //     })
    // } , [])
    // const users = useSelector( state => state.Profile.posts)
    // const dispatch = useDispatch()
    // if (users.length === 0) {
    //     dispatch(setPostFromProfile)
    // }
    // const func = () => {
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
    //         setUsers(response.data.items)
    //     })
    // }
    // func()
    // console.log(users)

    // func()
    // const mapping = users.map( i => {
    //     return <div>
    //     <div className={s.img}>
    //         <img src="https://4kwallpapers.com/images/walls/thumbs_3t/5865.jpg"/>
    //         <div>{i.name}</div>
    //         <div className={s.viewerBlock}>
    //             <div>Likes{i.id}</div>
    //             <div>Title</div>
    //         </div>
    //     </div>
    //     <div className={s.interactionBlock}>
    //         <div>Likes</div>
    //         <div>Comment</div>
    //     </div>
    //     <div className={s.active}>
    //         <div>
    //             <textarea name="" id="" cols="50"></textarea>
    //         </div>
    //     </div>
    //     </div>

    // })
    return (
        <div className={s.myPosts}>
    <div className={s.img}>
        <img src="https://4kwallpapers.com/images/walls/thumbs_3t/5865.jpg"/>
        <div className={s.viewerBlock}>
            <div>LikesCount</div>
            <div>Title</div>
        </div>
        <div className={s.interactionBlock}>
            <div>Likes</div>
            <div>Comment</div>
        </div>
        <div className={s.active}>
            <div>
                <textarea name="" id="" cols="50"></textarea>
            </div>
        </div>
    </div>
            {/* {mapping} */}
        </div>

    );
};
export default MyPosts;