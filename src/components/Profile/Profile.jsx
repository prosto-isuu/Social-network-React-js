import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PreloaderComponents from "../command/Preloader/PreloaderComponents";

const Profile = (props) => {
    return (
        <nav className={s.profile}>
            <MyPosts/>
            {/*{console.log(props.Users)}*/}
            {/*{props.Users.Profile.map(obj => {*/}
            {/*    return <div key={obj.id}>*/}
            {/*        <img src={obj.url}/>*/}
            {/*        <h3>{obj.title}</h3>*/}
            {/*        <PreloaderComponents/>*/}
            {/*    </div>*/}
            {/*})}*/}
            <ProfileInfo/>
        </nav>
    )
}

export default Profile;