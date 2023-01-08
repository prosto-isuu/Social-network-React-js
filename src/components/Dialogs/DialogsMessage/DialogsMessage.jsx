import s from "./DialogsMessage.module.css";
import {NavLink} from "react-router-dom";


export const DialogsMessage = (props) => {
    console.log(props)
    return(
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
        </div>
    )}

