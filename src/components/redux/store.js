import {combineReducers, createStore} from "redux";
import ProfileReducer, {setUsersProfileReducer} from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReducers from "./UsersReducers";

export const reducers = combineReducers({
    Profile:ProfileReducer,
    DialogsReducer,
    Users:UsersReducers,
})
export const store = createStore(reducers)

window.store = store
export default store;
