import React from 'react'
import s from "./DialogsMessage.module.css";
import {NavLink} from "react-router-dom";


export const DialogsMessage = (props) => {

const mappingMessage = props.messages.map( i => {
    return <div className={s.hihgSocre}>{i.message}</div>
})
    return (
<div className={s.navbar}>
        <div className={s.dialogs}>
            {mappingMessage}
        </div>
</div>
    )
}
