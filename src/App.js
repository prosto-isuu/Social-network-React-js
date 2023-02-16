import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './/components/Dialogs/Dialogs'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {compose} from "redux";
import {connect} from "react-redux";


function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/*" element={<ProfileContainer/>}/>
                        <Route exact path="/dialogs" element={<Dialogs/>}/>}
                        <Route exact path="/login" element={<Login/>}/>}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
