import React from 'react'
import s from "./DialogsMessage.module.css";
import {NavLink} from "react-router-dom";

//
//
// const addMessage = React.createRef()
// const sendMessage = () => {
//     let text = addMessage.current.value;
//     text = '';}

export const DialogsMessage = (props) => {
    return (
        <div className={s.item}>
            <div className={s.messages}>
                <NavLink to={'dialogs' + props.message[0].id}>{props.message[0].message}</NavLink>
            </div>
            <div className={s.messages}>
                <NavLink to={'dialogs' + props.message[1].id}>{props.message[1].message}</NavLink>
            </div>
            <div className={s.messages}>
                <NavLink to={'dialogs' + props.message[2].id}>{props.message[2].message}</NavLink>
            </div>
            <div className={s.messages}>
                <NavLink to={'dialogs' + props.message[3].id}>{props.message[3].message}</NavLink>
            </div>
            <div className={s.messageBar}>
                <div className={s.sendInput}>
                    <textarea  name='' id="" cols="50" rows="1" placeholder="Ввелите сообщение" />
                </div>
                <div className={s.sendButton}>
                    <button>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

