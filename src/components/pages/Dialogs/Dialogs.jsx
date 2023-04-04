import React, {useState} from 'react'
import s from './Dialogs.module.css'
import {useDispatch, useSelector} from "react-redux";
import MyTextarea from "../../UI/Textarea/MyTextarea";
import MyButton from "../../UI/Button/MyButton";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";

function Dialogs(props) {
    const [text, setText] = useState('')
    const users = useSelector(state => state.Dialogs.messages)
    const newMessageBody = useSelector(state => state.Dialogs.newMessageBody)
    const auth = useSelector(state => state.Auth.IsAuth)
    const dispatch = useDispatch()

    const onMessageChange = (event) => {
        let textBody = event.currentTarget.value
        dispatch(updateNewMessageBodyCreator(textBody))

    }

    const onAddPost = () => {
        dispatch(sendMessageCreator(text))
        dispatch(updateNewMessageBodyCreator(''))
    }

    return (
        <div>
            {
                users?.map(user=> {
                    return <div
                        key={user.id}
                        className={s.usersMessages}
                    >
                            <img
                                className={s.avatarBlock}
                                src="https://i.pinimg.com/originals/45/7c/e4/457ce410579ffaec6b00a31e81cc9a8a.jpg"
                                alt=""/>
                        <div className={s.info}>
                            <h3>{user.name}</h3>
                            <h5>{user.id}</h5>
                            <h5>{user.message}</h5>
                        </div>
                    </div>
                })
            }
            <div className={s.item}>
                <div className={s.usersMessage}>
                    <div className={s.infoAboutUsers}>Props.info</div>
                    <div className={s.messageBar}>props.message</div>
                    <MyTextarea
                        value={text}
                        onChange={e => onMessageChange(e)}
                    ></MyTextarea>
                    <MyButton
                        onClick={onAddPost}
                    >
                        Добавить пост
                    </MyButton>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
