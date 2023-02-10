import React from 'react'
import s from './MyPosts.module.css'
import {connect} from "react-redux";
import defaultUsersPhoto from '../../assets/images/dogStyle.jpeg'
import {AddMessages} from "../../redux/profile-reducer";

const MyPosts = (props) => {
    const userRendering = props.MyPost.myPosts.map(i => {
        return <div className={s.users}>
            <img src={defaultUsersPhoto}/>
            <div className={s.name}>Имя:{i.name}</div>
            <div className={s.messages}>Сообщение:{i.message}</div>
            <div className={s.likesCount}>Лайки{i.likesCount}</div>
        </div>
    })
    return (
        <div className={s.img}>
            <img src="https://i.ibb.co/R7tP6BD/image-2022-10-11-20-47-16.jpg"/>
            {userRendering}
            <input type="text" onChange={ event => { console.log(event.target.value) }}/>
            <button>Add new posts</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        MyPost: state.Profile
    }
}

const MyPostsContainer = connect(mapStateToProps, AddMessages)(MyPosts)

export default MyPostsContainer;