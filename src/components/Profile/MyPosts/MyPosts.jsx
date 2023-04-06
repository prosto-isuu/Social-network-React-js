import React, {useEffect, useState} from 'react';
import s from './MyPosts.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {BiLike} from 'react-icons/bi';
import {TiMessage} from 'react-icons/ti';
import MyButton from '../../UI/Button/MyButton';
import MyTextarea from '../../UI/Textarea/MyTextarea';
import {addPostActionCreator, deletePost, setUsers} from "../../../redux/profile-reducer";
import MyInput from "../../UI/Input/MyInput";

const MyPosts = (props) => {

    const [newPostBody, setNewPostBody] = useState('')
    const [newIconBody, setNewIconBody] = useState('')

    useEffect(() => {
        setUsers()
        console.log('brr')
    }, [])

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.Profile.posts);

    const onAddNewPostHandler = e => {
        dispatch(addPostActionCreator(newPostBody, newIconBody))
        setNewIconBody('');
        setNewPostBody('')
    }
    const removePosts = (id) => {
        dispatch(deletePost(id))
    }
    return (
        <div className={s.myPosts}>
            {
                posts?.map(post => {
                    return <div
                        className={s.img}
                    >
                        <img
                            src={post.icon}
                            className={s.image}
                        />
                        <div className={s.interactionBlock}>
                            <p>{post.likes}</p>
                            <MyButton>
                                <BiLike/>
                            </MyButton>
                            <MyButton>
                                <TiMessage/>
                                {`Комментарии`}
                            </MyButton>
                        </div>
                        <div
                            className={s.active}
                        >
                            <MyButton
                                onClick={e => removePosts(post.id)}
                            >
                                Удалить пост
                            </MyButton>
                        </div>
                    </div>
                })
            }
            <MyButton onClick={onAddNewPostHandler}
            >
                Добавить пост
            </MyButton>
            <MyInput
                value={newPostBody}
                onChange={e => setNewPostBody(e.currentTarget.value)}
                placeholder='Введите текст нового поста'
            />
            <MyInput
                value={newIconBody}
                onChange={e => setNewIconBody(e.currentTarget.value)}
                placeholder='Введите ссылку на изображение'
            />
        </div>
    );
};

export default MyPosts;
