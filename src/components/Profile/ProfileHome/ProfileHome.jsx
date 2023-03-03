import React from 'react'
import s from './Profile.module.css'
import ProfileContainerInfo from "../ProfileInfo/ProfileContainerInfo";

const ProfileHome = React.memo((props) => {
    return(
        <nav className={s.profile}>
            <ProfileContainerInfo/>

        </nav>
    )
})

export default ProfileHome;