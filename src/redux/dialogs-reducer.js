const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let defaultState = {
    dialogs: [
        {id: 1, name: 'iy00t'},
    ]
    ,
    messages: [
        {id: 1, message:'Привет друг', username:"@iy00t"}
    ] ,
};

const dialogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.payload}]
            };
        default:
            return state;
    }
}


export const sendMessageCreator = (payload) => ({type: SEND_MESSAGE, payload})

export default dialogsReducer;