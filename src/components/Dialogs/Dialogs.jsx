import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";



const DialogsItem = (props) => {
    return(
        <div className={s.item}>
            <NavLink to={"/dialogs" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const MessagesWithProps = (props) => {
    return (
        <div className={s.messages}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <div className={s.item}>
                    </div>
                    <DialogsItem name="Andrey" id="1" />
                    <DialogsItem name="Egor" id="2" />
                    <DialogsItem name="Milana" id="3" />
                    <DialogsItem name="Mister Beast" id="4" />
                    <DialogsItem name="Sigma" id="5" />
                    <DialogsItem name="Modern" id="6" />
                    <DialogsItem name="Post" id="7" />
                </div>
            <div className={s.messages}>



                <div className={s.messages}>
                    <MessagesWithProps message='Hi im dor`e'/>
                    <MessagesWithProps message='Hi my first '/>
                    <MessagesWithProps message='Hello'/>
                    <MessagesWithProps message='Indigo'/>
                </div>
        </div>
        </div>
    )
}


export default Dialogs;
