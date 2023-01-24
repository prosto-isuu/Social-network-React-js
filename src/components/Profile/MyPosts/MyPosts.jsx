import React from 'react'
import s from './MyPosts.module.css'
import {connect} from "react-redux";


const MyPosts = (props) => {
    {console.log(props.MyPost.myPosts)}
    const maptoMap = props.MyPost.myPosts.map( i => {
        return <div>
            <img src="https://i.pinimg.com/736x/aa/58/b2/aa58b22a60837ad32566671e54247ec8.jpg"/>
            <h1 key={i.likesCount}>{i.name}</h1>
            <h2>{i.message}</h2>
        </div>})
    return (
        <div className={s.img}>
            {maptoMap}
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        MyPost: state.Profile
    }
}

const mapToDispatchToProps = (dispatch) => {
    return{

    }
}


const MyPostsContainer = connect(mapStateToProps, )(MyPosts)

export default MyPostsContainer;