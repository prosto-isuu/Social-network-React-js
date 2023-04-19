"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var profile_reducer_ts_1 = require("./profile-reducer.ts");
var users_reducers_ts_1 = require("./users-reducers.ts");
var redux_thunk_1 = require("redux-thunk");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var dialogs_reducer_ts_1 = require("./dialogs-reducer.ts");
var auth_reducer_ts_1 = require("./auth-reducer.ts");
var rootReducer = (0, redux_1.combineReducers)({
    Auth: auth_reducer_ts_1.default,
    Dialogs: dialogs_reducer_ts_1.default,
    Profile: profile_reducer_ts_1.default,
    Users: users_reducers_ts_1.default,
});
// let state:AppStateType;
// state.Auth
var store = (0, redux_1.createStore)(rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));
// @ts-ignore // - эта строчка говорит о том что надо игнорировать данную подстроку
window.store = store;
exports.default = store;
