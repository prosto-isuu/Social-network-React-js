import React from 'react'
import s from "./DialogsMessage.module.css";
import {NavLink} from "react-router-dom";


export const DialogsMessage = (props) => {
    return (
        <div>
            {props.message}
            <button>Send message</button>
        </div>
    )}
