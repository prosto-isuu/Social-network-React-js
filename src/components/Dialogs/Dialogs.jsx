import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsItem} from "./DialogsItems/DialogsItem";
import {DialogsMessage} from "./DialogsMessage/DialogsMessage";


export const Dialogs = (props) => {
    // debugger;
    return  (
        <div className={s.dialogs}>
            <DialogsItem posts={props.stateName}/>
            <DialogsMessage message={props.stateMessages} />
        </div>
    )
}
