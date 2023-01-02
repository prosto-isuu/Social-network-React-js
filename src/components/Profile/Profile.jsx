import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/Posts/MyPosts";

const Profile =  => {
    return (
        <nav className={s.profile}>
            <div className={s.img}>
            <img src="https://i.ibb.co/285sgtC/iphone-14-pro-finish-unselect-gallery-1-202209-GEO-US-removebg-1.png"/>
            </div>
            <MyPosts/>
            {props.input}
            <MyPosts/>
            <MyPosts/>
        </nav>
    )
}

export default Profile;