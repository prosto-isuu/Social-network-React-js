import { useRef, useState } from "react";
import {connect} from "react-redux";
import {followACR} from "../../../redux/users-reducers";
import s from './DialogsMessageBar.module.css'


export const DialogMessage = ({messages, sendMessageCreator, }) => {
    console.log(sendMessageCreator)
    const [value, setValues] = useState('')
    const transformationMessages = messages.map((value, index, array) => {
        return <div>
            <div>{`Время: ${13}, Сообщение: ${value.message}`}</div>
        </div>
    })
    const onChangeInput = (event) => [
        setValues(event.currentTarget.value),
    ]

    const sendMessage = () => {
        sendMessageCreator(value)
        setValues('')  
        
    }
    return (
        <div className={s.item}>
            <div className={s.usersMessage}>
                <div className={s.infoAboutUsers}>@Hydra</div>
                <div className={s.messageBar}>{transformationMessages}</div>
                <div>
                    <input 
                    type="text" 
                    placeholder="Напишите ваше сообщение..."
                    onChange={onChangeInput}
                    value={value}/>
                    <button onClick={sendMessage}>Отправить сообщение</button>
                </div> 
            </div>
        </div>
    )
}

export default DialogMessage;
