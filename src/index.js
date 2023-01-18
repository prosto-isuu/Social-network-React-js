import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./components/redux/state";

const rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} dialogsPage={store._state.DialogsPage} store={state}/>
        </React.StrictMode>);
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

reportWebVitals()
