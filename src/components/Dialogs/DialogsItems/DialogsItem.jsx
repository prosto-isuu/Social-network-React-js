import s from "./DialogsItems.module.css";
import {connect} from "react-redux";
import {followACR} from "../../redux/UsersReducers";

export const DialogsItems = (props) => {
    const mapFnc = props.Users.users.map( i => {
        return <li key={i.id}>{i.fullName}</li>
    })

    const alerty = () => {

    }

    return (
        <div className={s.item}>
            <div></div>
            <div>
                <div>Users:{mapFnc}</div>
                <textarea placeholder='type...'></textarea>
                <button onClick={alerty}>Send Message</button>
            </div>
        </div>
    )
}

const mapToState = (state) => {
    return{
        Users: state.Users
    }
}
const mapToDispatch = (dispatch) => {
    return{
        // call: dispatch(followACR)
    }
}

const DialogsItemContainer = connect(mapToState, mapToDispatch)(DialogsItems)
export default DialogsItemContainer;

