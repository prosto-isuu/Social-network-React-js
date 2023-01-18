import './App.css';
import Header from '../src/components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Dialogs} from './/components/Dialogs/Dialogs'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile myPosts={props.state.ProfilePage.myPosts} dispatch={props.dispatch} />}/>
                    {console.log(props.store)}
                    <Route exact path="/dialogs" element={<Dialogs users={props.state.DialogsPage.users} messages={props.state.DialogsPage.myMessage} dialogsPage={props.dialogsPage} props={props.store}/>}/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}
//
export default App;
