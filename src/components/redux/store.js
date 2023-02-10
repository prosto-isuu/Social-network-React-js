import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import UsersReducers from "./users-reducers";
import AuthReducer from "./auth-reducer";
import thunk from "redux-thunk";


export const reducers = combineReducers({
    Profile:ProfileReducer,
    DialogsReducer,
    Users:UsersReducers,
    Auth: AuthReducer,
})
export const store = createStore(reducers, applyMiddleware(thunk))

window.store = store
export default store;
