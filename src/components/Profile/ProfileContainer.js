import React, {useEffect, useState} from 'react';
import Profile from "./Profile";
import {compose} from "redux";
import {connect} from "react-redux";
import {getStatus, updateStatus} from "../redux/profile-reducer";
import {profileAPI} from "../api/userApi";
const ProfileContainer = (props) => {
    const [status, setStatus] = useState()
    let userId = 2
    if (!userId) {
        userId = 1049;
    }
    useEffect(() => {
        setStatus( profileAPI.getStatus(userId) )
    }, [])
    return (
        <>
            <Profile {...props}/>
        </>
    );
};

const mapToStateToProps = (state) => {
    return{
        isAuth: state.Auth.IsAuth,
        status: state.Profile.status
    }
}

export default compose(
    connect(mapToStateToProps, {getStatus, updateStatus}),
    // withAuthRedirect
)(ProfileContainer);