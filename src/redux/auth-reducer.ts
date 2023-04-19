enum authActionType {
    AUTH_ME = "AUTH_ME"
}

interface StateType {
    id:null | string;
    login: null | string,
    email: null | string,
    IsAuth: boolean,
}

const defaultState:StateType = {
    id:null,
    login: null,
    email: null,
    IsAuth: true,
}

interface authMeActionType {
    type:authActionType.AUTH_ME
    data: any
}

type ActionType = authMeActionType

const AuthReducer = (state = defaultState, action:ActionType):StateType => {
    switch (action.type) {
        case authActionType.AUTH_ME : {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}



export const AuthVerification = (id, login, email) => ({type:authActionType.AUTH_ME, id, login, email})
export default AuthReducer;