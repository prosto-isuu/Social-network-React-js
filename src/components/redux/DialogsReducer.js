const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POSTS-TEXT'

const dialogsReducer = (state, action) => {
    if (action.type === UPDATE_NEW_POST_TEXT){
       state.newMessageBody = action.body;
    } else if (action.type === SEND_MESSAGE) {
        let body =  state.newMessageBody = action.body;
        state.newMessageBody = action.body = '';
        let newMessage = {name:1, message:body}
        state.myMessage.push(newMessage)
    }

    return state
}

export default dialogsReducer;