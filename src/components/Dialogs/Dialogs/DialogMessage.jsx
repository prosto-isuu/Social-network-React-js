import {connect} from "react-redux";
import {followACR} from "../../../redux/users-reducers";
import s from './DialogsMessageBar.module.css'


export const DialogMessage = (props) => {
    return (
        <div className={s.item}>
            <div className={s.usersMessage}>
                <div className={s.infoAboutUsers}>Props.info</div>
                <div className={s.messageBar}>props.message</div>
                <div>Props.acitve</div>
                <div><textarea name="" id="" cols="50" rows="2"></textarea></div> 
            </div>
        </div>
    )
}

export default DialogMessage;
