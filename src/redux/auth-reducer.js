const AUTH_ME = "AUTH_ME"

const defaultState = {
    id:null,
    login: null,
    email: null,
    IsAuth: false,
}
const AuthReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH_ME : {
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



export const AuthVerification = (id, login, email) => ({type:AUTH_ME, id, login, email})
export default AuthReducer;