import React from 'react'
import ProfileInfo from "./ProfileInfo";
import s from './ProfileInfo.module.css'
import {connect} from "react-redux";
import {actionCretor} from "../../redux/store";
// function ProfileInfoContainer(props) {
    // const dispatch = () => {
    //     alert('Hello world')
    //     props.dispatch({
    //         type: 'ADD-POSTS'
    //     })
//     const iterationMessage = state.ProfilePage.myPosts.map( i => {
//         return <div className={s.users}>
//             <img src="https://static.wikia.nocookie.net/ben/images/9/90/Alien_x_ben10world_ru.png/revision/latest?cb=20140612150337&path-prefix=ru" alt="ava"/>
//             Message:{i.message}, likes:{i.likesCount}
//         </div>
//     })
//
// }

let mapToArr = (state) => {
    return {

    }
}

let mapToCallback = () => {
    return {
    dispatch: () => {
        actionCretor()
    }
    }
}

const SuperProfileContainer = connect()(ProfileInfo)

export default SuperProfileContainer;