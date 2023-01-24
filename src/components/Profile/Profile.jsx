import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import axios from 'axios'

const Profile = (props) => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))

    return (
        <nav className={s.profile}>
            <MyPosts/>
            <ProfileInfo/>
        </nav>
    )
}

export default Profile;