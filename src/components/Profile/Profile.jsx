import React, {PureComponent} from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile =  React.memo((props) => {
        return (
            <nav className={s.profile}>
                <MyPosts />
                <ProfileInfo status={props.status} updateStatus={props.updateStatus} />
            </nav>
        )
})


export default Profile;