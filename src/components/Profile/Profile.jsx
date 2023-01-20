import React from 'react'
import s from './Profile.module.css'
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return (
        <nav className={s.profile}>
            <MyPostsContainer store={props.store}/>
            <ProfileInfoContainer store={props.store} />
        </nav>
    )
}

export default Profile;