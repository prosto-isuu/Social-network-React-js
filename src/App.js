import './App.css';
import Header from '../src/components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Dialogs} from './/components/Dialogs/Dialogs'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/Users";

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route exact path="/dialogs" element={<Dialogs/>}/>}/>
                        <Route path="/users" element={<UsersContainer/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

//
export default App;
