import React from 'react'
import s from './ProfileInfo.module.css'
import {addPostActionCreator, updateNewPostTextCreator} from "../../redux/state";

function ProfileInfo(props) {
    const mappingProfile = props.myPosts.map(i => {
        return <div>
            <h2>Name:{i.name}, Likes:{i.likesCount}, Message:{i.message}</h2>
        </div>
    })
    const refs = React.createRef()

    let addPosts = () => {
        props.dispatch(addPostActionCreator())
    }

    const onChange = () => {
        let text = refs.current.value
        let action = updateNewPostTextCreator(text)
        props.dispatch(action)}


    return (
        <div className={s.myPosts}>
            <div className={s.myPostBlock}>
                <div className={s.input}>
                    <h1>My posts</h1>
                    <textarea placeholder='Type..' ref={refs} onChange={onChange} value={props.newPostText}/>
                    <button onClick={addPosts}>Add Post</button>
                </div>
                {mappingProfile}
            </div>
        </div>
    )
    }

export default ProfileInfo;