import Profile from "../components/Profile/Profile.tsx";
import Login from "../components/Login/Login";
import Users from "../components/pages/Users/Users.tsx";
import {AiFillHome} from "react-icons/ai";
import {BiMessageDetail} from "react-icons/bi";
import {FaUserCheck} from "react-icons/fa";
import UsersPage from "../components/pages/Users/UserPage/UsersPage";
import Dialogs from "../components/pages/Dialogs/Dialogs";

export const publicRoutes = [
    {path:'/profile', element:Profile},
    {path:'/dialogs', element:Dialogs},
    {path:'/login', element:Login},
    {path:'/users', element:Users},
    {path:'/users/:id', element:UsersPage},
]
export const privateRoutes = [
    {path:'/profile', element:Profile},
    {path:'/dialogs', element:Dialogs},
    {path:'/login', element:Login},
    {path:'/users', element:Users},
    {path:'/users/:id', element:UsersPage},
]

export const routesLinks = [
    {path:'/profile', title:'Профиль', children:AiFillHome},
    {path:'/dialogs', title:'Сообщения', children:BiMessageDetail},
    {path:'/users', title:'Самураи', children:FaUserCheck},
    {path:'/news', title:'Новости', children:AiFillHome},
]