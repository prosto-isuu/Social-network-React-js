import {v1} from "uuid";

enum dialogsActionType {
    UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY",
    SEND_MESSAGE = "SEND_MESSAGE",
}

interface messagesType {
    id:string;
    name?:string;
    message:string;
}

interface initialStateType {
    messages : messagesType[];
    newMessageBody: string;
}

let initialState:initialStateType = {
    messages: [
        {id: v1(), name:'Begimai', message: 'Hi'},
        {id: v1(), name:'Begimai', message: 'Привет)'},
        {id: v1(), name:'Begimai', message: 'Yo'},
        {id: v1(), name:'Begimai', message: 'Yo'},
        {id: v1(), name:'Begimai', message: 'Yo'}
    ],
    newMessageBody: "",
};



interface actionType {
    type: string,
    payload: any
}

type ActionType = UpdateMessageAction | SendMessageAction

interface UpdateMessageAction {
    type: dialogsActionType.UPDATE_NEW_MESSAGE_BODY,
    payload: string,
}
interface SendMessageAction {
    type: dialogsActionType.SEND_MESSAGE,
    payload: string,
}



const dialogsReducer = (state = initialState, action:ActionType):initialStateType => {
    switch (action.type) {
        case dialogsActionType.UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.payload,
            };
        case dialogsActionType.SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: '233', message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: dialogsActionType.SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body:string) =>
    ({type: dialogsActionType.UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;