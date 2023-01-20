import React from 'react'
import s from './Dialogs.module.css'
import DialogsItemsContainer from "./DialogsItems/DialogsItemsContainer";
import DialogsMessageContainer from "./DialogsMessage/DIalogsMessageContainer";


export const Dialogs = (props) => {
    return  (
        <div className={s.dialogs}>
            <DialogsItemsContainer store={props.store}/>
            <DialogsMessageContainer store={props.store} />
        </div>
    )
}
