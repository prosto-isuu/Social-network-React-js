import Profile from "../components/Profile/Profile";
import Dialogs from "../components/pages/Dialogs/Dialogs";
import Login from "../components/Login/Login";
import Users from "../components/pages/Users/Users";
import {AiFillHome} from "react-icons/ai";
import {BiMessageDetail} from "react-icons/bi";
import {FaUserCheck} from "react-icons/fa";

export const routes = [
    {path:'/profile', element:Profile},
    {path:'/dialogs', element:Dialogs},
    {path:'/login', element:Login},
    {path:'/users', element:Users},
]

export const routesLinks = [
    {path:'/profile', title:'Профиль', children:AiFillHome},
    {path:'/dialogs', title:'Сообщения', children:BiMessageDetail},
    {path:'/users', title:'Самураи', children:FaUserCheck},
    {path:'/news', title:'Новости', children:AiFillHome},
]