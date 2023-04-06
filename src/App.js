import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Suspense, lazy} from 'react';

import Header from "./components/Header/Header";
import {publicRoutes} from "./Routes/routes";

const Dialogs = lazy(() => import("./components/pages/Dialogs/Dialogs"));

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Suspense fallback={<div>Loading...</div>}>
                    <Header/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            {
                                publicRoutes.map(route => {
                                    return <Route
                                        path={route.path}
                                        element={<route.element/>}
                                    />
                                })
                            }
                        </Routes>
                    </div>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;
