import React from 'react'
import s from './Dialogs.module.css'
import {connect} from "react-redux";
import DialogMessage from "./Dialogs/DialogMessage";
import {Navigate} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import DialogsBar from './Dialogs/DialogsBar';

const Dialogs = (props) => {
    return  (
        <div className={s.dialogs}>
            <div><DialogsBar users={props.users} /></div>
            <div><DialogMessage/></div>
        </div>
    )
}

const mapToStateToProps = (state) => {
    return{
        isAuth: state.Auth.IsAuth,
        users: state.Dialogs.dialogs
    }
}
export default compose(connect(
    mapToStateToProps),
    // withAuthRedirect,
    )(Dialogs)