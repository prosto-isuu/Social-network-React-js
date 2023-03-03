import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { commentReducer } from "./comment-reducer";

const reducers = combineReducers({
    Auth: authReducer,
    Dialogs: dialogsReducer,
    Profile: profileReducer,
    Users: usersReducer,
    Comments: commentReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

window.store = store

export default store;
