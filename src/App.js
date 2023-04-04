import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Suspense, lazy} from 'react';
import {routes} from "./Routes/routes";
import Header from "./components/Header/Header";

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
                                routes.map(route => {
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
