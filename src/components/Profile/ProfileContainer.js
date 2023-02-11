import React, {useEffect} from 'react';
import Profile from "./Profile";
import {compose} from "redux";
import {connect} from "react-redux";

const ProfileContainer = (props) => {
    useEffect()
    return (
        <>
            <Profile {...props}/>
        </>
    );
};
const mapStateToProps = (state) => {
    return{

    }
}

export default compose(
    connect()
)(Profile);