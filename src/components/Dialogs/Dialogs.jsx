import React from 'react'
import s from './Dialogs.module.css'
import {connect} from "react-redux";
import DialogMessage from "./Dialogs/DialogMessage";
import {Navigate} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";

const Dialogs = (props) => {
    return  (
        <div className={s.dialogs}>
            <DialogMessage />
        </div>
    )
}

const mapToStateToProps = (state) => {
    return{
        isAuth: state.Auth.IsAuth
    }
}
export default compose(connect(
    mapToStateToProps),
    withAuthRedirect,
    )(Dialogs)