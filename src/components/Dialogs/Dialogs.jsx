import React from 'react'
import s from './Dialogs.module.css'
import {connect} from "react-redux";
import DialogMessage from "./Dialogs/DialogMessage";
import {compose} from "redux";
import DialogsBar from './Dialogs/DialogsBar';
import { sendMessageCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    return  (
        <div className={s.dialogs}>
            <div><DialogsBar users={props.users} /></div>
            <div><DialogMessage messages={props.messages} props={props}/></div>
        </div>
    )
}

const mapToStateToProps = (state) => {
    return{
        isAuth: state.Auth.IsAuth,
        users: state.Dialogs.dialogs,
        messages: state.Dialogs.messages
    }
}
export default compose(connect(
    mapToStateToProps, {sendMessageCreator}),
    // withAuthRedirect,
    )(Dialogs)