import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
    Auth: authReducer,
    Dialogs: dialogsReducer,
    Profile: profileReducer,
    Users: usersReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store;
