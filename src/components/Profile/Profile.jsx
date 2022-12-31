import React from 'react'
import s from './Profile.module.css'

const Profile = () => {
    return (
        <nav className={s.profile}>
            <div><div>
                My post
                <div>New post</div>
            </div>
            <div classname={s.item}>Post 1</div>
            <div classname={s.item}>Post 1</div></div>

        </nav>
    )
}

export default Profile;