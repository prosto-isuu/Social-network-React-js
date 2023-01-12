import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {addPost} from './components/redux/state'
import state from './components/redux/state'
import {dispatch} from "./components/redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <App appState={state} friendsName={state.DialogsMessageArray}  dispatch={dispatch()}/>
    </React.StrictMode>);
