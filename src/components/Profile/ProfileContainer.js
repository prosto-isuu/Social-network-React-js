import React, {useEffect, useState} from 'react';
import Profile from "./Profile";
import {compose} from "redux";
import {connect} from "react-redux";
import {getStatus, getStatusFake, updateStatus} from "../../redux/profile-reducer";
import {profileAPI} from "../api/userApi";
import {authSelector, statusSelector} from "../../redux/selectors/auth-selector";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
const ProfileContainer = (props) => {
    const [status, setStatus] = useState()
    useEffect(() => {
        getStatusFake(2)
    }, [])
    return (
        <>
            <Profile {...props}/>
        </>
    );
};

const mapToStateToProps = (state) => {
    return{
        isAuth: authSelector(state),
        status: statusSelector(state)
    }
}

const mapToStateProps = (state) => {
    return{
        cash: state.cash
    }
}





export default compose(
    connect(mapToStateToProps, {getStatus, updateStatus, getStatusFake}),
    // withAuthRedirect
)(ProfileContainer);

