import s from "./DialogsItems.module.css";
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBody} from "../../redux/state";


export const DialogsItem = (props) => {
    const mappingUsers = props.users.map( i => {
        return <NavLink to={i.id} className={s.nav}>{i.name}</NavLink>
    })

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())

    }
    let onNewMessageChange = (event) => {
        let body = event.target.value
        props.store.dispatch(updateNewMessageBody(body))
    }
    return (
        <div className={s.item}>
            <div>{mappingUsers}</div>
            <div>
                <div><textarea placeholder="enter your messages" value={props} onChange={onNewMessageChange}></textarea></div>
                <div><button onClick={onSendMessageClick}>Send messages</button></div>
            </div>
        </div>
    )
}

