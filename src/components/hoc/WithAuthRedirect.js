import React from 'react';
import { Navigate } from "react-router-dom";
import {connect} from "react-redux";

const mapToStateToProps = (state) => {
    return{
        isAuth: state.Auth.IsAuth
    }
}

export const withAuthRedirect = (Component) => {
    let redirectComponent = (props) =>  {
        if (props.isAuth == false) return <Navigate to={'/login'} />
        return <Component {...props} />
    }
    let ConnectedAuthRedirect = connect(mapToStateToProps)(redirectComponent)
    return ConnectedAuthRedirect;
}