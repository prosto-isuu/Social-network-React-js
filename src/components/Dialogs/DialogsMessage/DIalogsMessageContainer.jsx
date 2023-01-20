import React from 'react'
import {DialogsMessage} from "./DialogsMessage";


export const DialogsMessageContainer = (props) => {
    const state = props.store.getState()
    const mappingMessage = state.DialogsPage.myMessage.map( i => {
        return <div>Message:{i.message}, User:{i.user}</div>
    })


    return (
        <DialogsMessage message={mappingMessage}/>
    )
}

export default DialogsMessageContainer;