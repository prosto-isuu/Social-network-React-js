import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import Status from "../command/Status";


const Profile = (props) => {
    return (
        <nav className={s.profile}>
            <MyPosts/>
            <Status/>
        </nav>
    )
}

const mapToStateToPropsRedirect = (state) => {
    return{
        isAuth: state.Auth.IsAuth
    }
}

export default compose(
    connect(mapToStateToPropsRedirect),
    // withAuthRedirect
)(Profile);