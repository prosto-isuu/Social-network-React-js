const defaultState = {
    users: [
        {name: 'Dima', id: 1},
        {name: 'Nur', id: 1},
    ],
    message:[
        {name: 'Dastan', message: 'Hello how are you?'},
        {name: 'Milana', message: 'Мы импортируем?'},
    ],
    newMessageBody: '',
}
const DialogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "add-user":
            return {...state,}
        case "getUser":
            return {...state, }
        default:
            return state
    }
}
export default DialogsReducer;