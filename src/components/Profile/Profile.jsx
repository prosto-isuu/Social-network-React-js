import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <nav className={s.profile}>
            <MyPosts/>
            <ProfileInfo myPosts={props.myPosts} dispatch={props.dispatch}/>
        </nav>
    )
}

export default Profile;