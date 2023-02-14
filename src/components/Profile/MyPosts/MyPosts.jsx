import React from 'react'
import s from './MyPosts.module.css'
import defaultUsersPhoto from '../../assets/images/dogStyle.jpeg'
import {compose} from "redux";
import {connect} from "react-redux";
import {postsSelector} from "../../../redux/selectors/auth-selector";

const MyPosts = (props) => {
    const userRendering = props.Posts.map(i => {
        return <div className={s.users}>
            <img src={defaultUsersPhoto}/>
            <div className={s.name} >Имя:{i.id}</div>
            <div className={s.message} >Сообщение:{i.message}</div>
            <div className={s.likesCount} >Лайки{i.likesCount}</div>
        </div>
    })
    console.log(props)
    return (
        <div>
    <div className={s.img}>
        <img src="https://i.ibb.co/R7tP6BD/image-2022-10-11-20-47-16.jpg"/>
        {userRendering}
    </div>
        </div>

    );
};
    const mapStateToProps = (state) => {
        return {
            Posts: postsSelector(state)
        }
    }
export default compose(
    connect(mapStateToProps, {})
)(MyPosts);