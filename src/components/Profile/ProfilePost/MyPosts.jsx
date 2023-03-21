import React from 'react';
import s from './MyPost.module.css'
import {compose} from "redux";
import {connect} from "react-redux";
import {deletePost, setPosts, setStatus} from "../../../redux/profile-reducer";
import { getStatus, updateStatus } from '../../../redux/profile-reducer';

const MyPosts = (props) => {
    const [networkStatus, setNetworkStatus] = React.useState('')
    const [status, setStatus] = React.useState(props.status)
    const [postBody, setPostBody] = React.useState('') 
    const [editMode, setEditMode] = React.useState(false)

    const onStatusSet = (event) => {
        const value = event.target.value
        props.setStatus(value)
        setStatus(value)
    }

    const activeMode = () => {
        setEditMode(true)
    }

    const deactiveMode = () => {
        setEditMode(false)
        props.updateStatus(networkStatus)
    }

    const transformPost = props.posts.map((value) => {
        return <div>
            <div>{`Заголовок поста ${value.title}`}</div>
            <div><img src={value.url} alt="" /></div>
            <div>{`Описание поста ${value.body}`}</div>
            <div>{`Henry`}</div>
        </div>
    })

    const onSetPost = (event) => {
        let postBody = event.target.value
        setPostBody(postBody)
    }

    const setStatusNetwork = (event) => {
        let text = event.target.value
        setNetworkStatus(text)
        props.updateStatus(text)
    }

    return (
        <div className={s.profile}>
            <div className={s.users}>
                <div className={s.usersImg}>
                { !editMode &&
            <div>
                <span onDoubleClick={ activeMode }>{networkStatus || "-------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={setNetworkStatus} autoFocus={true} onBlur={ deactiveMode }
                       value={networkStatus} />
            </div>
            }
                {props.status ? <div>Status:{status}</div> : <div>У вас нет статуса</div>}
                <input type="text" value={status} onChange={onStatusSet}/>
                </div>
                {transformPost}
                <input type="text" placeholder='Добавить новый пост' value={postBody} onChange={onSetPost}/>
                <button onClick={() => props.setPosts(postBody)}>Создать пост</button>
            </div>
            <div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        status: state.Profile.status,
        posts: state.Profile.posts
    }
}

export default compose(
    connect(mapStateToProps, {setStatus,deletePost,setPosts, getStatus, updateStatus})
)(MyPosts);

