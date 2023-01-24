import React from 'react'
import s from './Dialogs.module.css'
import {DialogsMessage} from "./DialogsMessage/DialogsMessage";
import DialogsItems from "./DialogsItems/DialogsItem";

export const Dialogs = (props) => {
    return  (
        <div className={s.dialogs}>
            <DialogsItems/>
            <DialogsMessage/>
        </div>
    )
}
