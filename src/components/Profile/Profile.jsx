import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import axios from 'axios'
import {connect} from "react-redux";
import Preloader from "../assets/images/preloader.gif";
import {SetIsFetchingActionCreator} from "../redux/UsersReducers";

const Profile = (props) => {
    console.log(props)
    // axios.get('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    return (
        <nav className={s.profile}>
            <MyPosts/>
            <ProfileInfo/>
            {console.log()}
        </nav>
    )
}
const maptoState = (state) => {
    return{
        Preloader: state.Users
    }
}
const mapToDispatch = (dispatch) => {
    return{
        toggleIsFetching: (isFetching) => {
            dispatch(SetIsFetchingActionCreator(isFetching))
        }
    }
}


const ProfileContainer = connect(maptoState, mapToDispatch)(Profile)
export default ProfileContainer;