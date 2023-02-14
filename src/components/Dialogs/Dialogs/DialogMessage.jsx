import s from "./MyPosts.module.css";
import {connect} from "react-redux";
import {followACR} from "../../../redux/users-reducers";

export const DialogMessage = (props) => {
    return (
        <div className={s.item}>
            <div>Adam bol</div>
            <div>
                <div>Users:Henry</div>
                <textarea placeholder='type...'></textarea>
                <button>Send Message</button>
            </div>
        </div>
    )
}

export default DialogMessage;
