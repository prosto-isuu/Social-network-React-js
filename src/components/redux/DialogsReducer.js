const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAFE_BODY = 'UPDATE_NEW_MESSAFE_BODY'

let initialState = {
    users: [
        {name: 'Dima', id: 1},
        {name: 'Oleg', id: 2},
        {name: 'Ayana', id: 3},
        {name: 'Andrey', id: 4},
    ],
        myMessage: [
    {name: 'Dastan', message: 'Hello how are you?'},
    {name: 'Nurbo', message: 'Hello how are you?'},
    {name: 'Elayum', message: 'I`m Good!'},
    {name: 'Nurjigit', message: 'Hello how are you?'},
],
    newMessageBody : 'Message',

}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAFE_BODY : {
            state.newMessageBody = action.body;
        }
        case SEND_MESSAGE : {
            let body =  state.newMessageBody = action.body;
            state.newMessageBody = action.body = '';
            let newMessage = {name:1, message:body}
            state.myMessage.push(newMessage)
        }

        default: return state
    }
}
export const updateNewMessageBody = (body) => ({type:UPDATE_NEW_MESSAFE_BODY,body:body})

export const sendMessageCreator = () => ({type: SEND_MESSAGE,})


export default dialogsReducer;