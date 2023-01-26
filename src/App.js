import './App.css';
import Header from '../src/components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Dialogs} from './/components/Dialogs/Dialogs'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersApi from "./components/Users/UsersContainer";
import ApiConnect from "./components/Users/ApiConnect";
import React from "react";
import ProfileContajner from "./components/Profile/ProfileContainerAjax";

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/*" element={<ProfileContajner/>}/>
                        <Route exact path="/dialogs" element={<Dialogs/>}/>}
                        <Route path="/users" element={<UsersApi/>}></Route>
                        <Route path="/connect" element={<ApiConnect/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

//
export default App;
