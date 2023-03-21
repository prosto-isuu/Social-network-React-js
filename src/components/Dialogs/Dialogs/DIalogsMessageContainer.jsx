import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux'
import DialogMessage from './DialogMessage';
import { updateInputBox } from '../../../redux/dialogs-reducer';
import { sendMessageCreator } from '../../../redux/dialogs-reducer';


function DialogsMessageContainer({messages, sendMessageCreator}) {
  console.log(sendMessageCreator)
  return (
    <>
      <DialogMessage messages={messages} sendMessageCreator={sendMessageCreator}/>
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    messages: state.Dialogs.messages,
  }
}

export default compose(
  connect(mapStateToProps, {sendMessageCreator})
)(DialogsMessageContainer);