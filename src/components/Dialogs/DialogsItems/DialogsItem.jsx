import s from "./DialogsItems.module.css";

export const DialogsItem = (props) => {
    return (
        <div className={s.item}>
            <div></div>
            <div>
                <div>Users:{props.users}</div>
                <textarea placeholder='type...'></textarea>
                <button onClick={props.addUser}>Send Message</button>
            </div>
        </div>
    )
}

