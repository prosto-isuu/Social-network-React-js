import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import dialogsReducer from "./dialogs-reducer";
import authReducer from "./auth-reducer";


const rootReducer = combineReducers({
    Auth: authReducer,
    Dialogs: dialogsReducer,
    Profile: profileReducer,
    Users: usersReducer,
})


type RootReducerType = typeof rootReducer;// typeof - в ts сам определяет тип и записывает его (stata:globalState) => state

export type AppStateType = ReturnType<RootReducerType>

// let state:AppStateType;

// state.Auth


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// @ts-ignore // - эта строчка говорит о том что надо игнорировать данную подстроку
window.store = store

export default store;

