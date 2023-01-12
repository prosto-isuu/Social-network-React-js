import './App.css';
import Header from '../src/components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Dialogs} from './/components/Dialogs/Dialogs'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar nameFriend={props.friendsName}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route exact path="/dialogs" element={<Dialogs stateName={props.appState.currentName} stateMessages={props.appState.DialogsMessageArray}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music music={props.dispatch} />}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/Sayow" element={<Music  />}></Route>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
