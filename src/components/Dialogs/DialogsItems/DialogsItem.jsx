import s from "./DialogsItems.module.css";
import {NavLink} from "react-router-dom";


export const DialogsItem = (props) => {
    const mappingUsers = props.users.map( i => {
        return <NavLink to={i.id} className={s.nav}>{i.name}</NavLink>
    })
    return (
        <div className={s.item}>
            {mappingUsers}
        </div>
    )
}

