import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Suspense, lazy} from 'react';
import {publicRoutes} from "./Routes/routes";
import Loader from "./components/UI/Loader/Loader";
import Sidebar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

/* const Dialogs = lazy(() => import("./components/pages/Dialogs/Dialogs")); */

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Suspense fallback={<Loader/>}>
                    <Header/>
                    <Sidebar/>
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
