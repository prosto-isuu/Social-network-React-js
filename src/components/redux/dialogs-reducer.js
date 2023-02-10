const ADD_MESSAGE_DIALOGS = "ADD_MESSAGE_DIALOGS"

const defaultState = {
    message: [
        {name: 'Tayler Darden', message: 'Первое правило бойцовского клуба не говорит о бойцовском клубе'},
        {name: 'Tayler Darden', message: 'Второе правило бойцовского клуба нигде не говорить о бойцовском клубе?'},
        {name: 'Ismain', message: 'Go!'},
    ]
}
const DialogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_DIALOGS: {
            return {
                ...state, message:  state.message, ...action.payload
            }
        }
        default:
            return state
    }
}

export default DialogsReducer;