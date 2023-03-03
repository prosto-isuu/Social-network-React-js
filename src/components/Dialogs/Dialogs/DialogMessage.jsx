import { useRef, useState } from "react";
import {connect} from "react-redux";
import {followACR} from "../../../redux/users-reducers";
import s from './DialogsMessageBar.module.css'


export const DialogMessage = (props) => {
    const valueOfInput = useRef()
    console.log(valueOfInput.current)
    const [value, setValues] = useState('')
    const transformationMessages = props.messages.map((value, index, array) => {
        return <div>
            {value.message}
        </div>
    })
    const onChangeInput = (event) => [
        setValues(event.currentTarget.value),
        props.sendMessageCreator(event.currentTarget.value)
        
    ]
    return (
        <div className={s.item}>
            <div className={s.usersMessage}>
                <div className={s.infoAboutUsers}>@Hydra</div>
                <div className={s.messageBar}>{transformationMessages}</div>
                <div>
                    <input 
                    type="text" 
                    placeholder="type your message..."
                    onChange={onChangeInput}
                    value={value}
                    ref={valueOfInput} />
                    <button>Send</button>
                </div> 
            </div>
        </div>
    )
}

export default DialogMessage;
