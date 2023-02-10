import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './/components/Dialogs/Dialogs'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import ProfileContajner from "./components/Profile/ProfileContainerAjax";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";



function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/*" element={<ProfileContajner/>}/>
                        <Route exact path="/dialogs" element={<Dialogs/>}/>}
                        <Route exact path="/login" element={<Login/>}/>}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
