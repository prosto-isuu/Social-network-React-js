import React, {PureComponent} from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./StatusBlock/ProfileInfo";

const Profile = React.memo((props) => {
        return (

                <ProfileInfo/>
        )
})


export default Profile;