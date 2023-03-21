import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Suspense, lazy } from 'react';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import Profile from "./components/Profile/Profile";
import DialogsMessageContainer from './components/Dialogs/Dialogs/DialogsMessageContainer';
const Dialogs = lazy(() => import("./components/Dialogs/Dialogs"));

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Suspense fallback={<div>Loading...</div>}>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/*" element={<Profile/>}/>
                        <Route exact path="/dialogs" element={<DialogsMessageContainer/>}/>
                        <Route exact path="/users" element={<UsersContainer/>}/>
                        <Route exact path="/login" element={<Login/>}/>
                    </Routes>
                </div>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;
