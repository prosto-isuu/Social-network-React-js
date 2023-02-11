import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import Status from "../command/Status";
import {useEffect} from "react";
import {profileApi} from "../api/profile-api";
import {getStatus, updateStatus} from "../redux/profile-reducer";


const Profile = (props) => {
    return (
        <nav className={s.profile}>
            <MyPosts status={props.status} updateStatus={props.updateStatus}/>
            <Status datum={{name:"Andy", body:'Hello World!'}}/>
        </nav>
    )
}

const mapToStateToPropsRedirect = (state) => {
    return{
        isAuth: state.Auth.IsAuth,
        status: state.Profile.status
    }
}

export default compose(
    connect(mapToStateToPropsRedirect, {getStatus, updateStatus}),
    // withAuthRedirect
)(Profile);