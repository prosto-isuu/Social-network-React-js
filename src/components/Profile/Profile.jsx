import React from 'react';
import MyPosts from "./ProfilePost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'

const Profile = React.memo((props) => {
    return (
        <nav className={s.profile}>
            <MyPosts/>
            <ProfileInfo/>
        </nav>
    );
})

export default Profile;