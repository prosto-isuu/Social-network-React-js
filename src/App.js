import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Suspense, lazy } from 'react';
import UsersContainer from './components/Users/UsersContainer';
import Users from './components/Users/Users';
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
                        <Route path="/profile/*" element={<ProfileContainer/>}/>
                        <Route exact path="/dialogs" element={<Dialogs/>}/>
                        <Route exact path="/login" element={<Users/>}/> 
                        <Route exact path="/users" element={<UsersContainer/>}/>
                    </Routes>
                </div>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;
