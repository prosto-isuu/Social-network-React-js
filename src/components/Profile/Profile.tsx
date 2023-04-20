import React, {useEffect, useState} from "react";
import {setUsers} from "../../redux/users-reducers";
import {useDispatch, useSelector} from "react-redux";
import {addPostActionCreator, deletePost} from "../../redux/profile-reducer";
import MyButton from "../UI/Button/MyButton";
import {TiMessage} from "react-icons/ti";
import {BiLike} from "react-icons/bi";
// @ts-ignore
import style from './Profile.module.css'
import MyInput from "../UI/Input/MyInput";
import {AppStateType} from "../../redux/store";

const Profile = (props) => {

    const [newPostBody, setNewPostBody] = useState<string>('')
    const [newIconBody, setNewIconBody] = useState<string>('')
    const [editMode, setEditMode] = useState<boolean>(false)

    useEffect(() => {
        // @ts-ignore
        setUsers()
    }, [])

    const onSwitchMode = () => {
        if (editMode) {
            setEditMode(false)
        } else if (!editMode) {
            setEditMode(true)
        }
    }

    const dispatch = useDispatch();
    const posts = useSelector((state:AppStateType) => state.Profile.posts);

    const onAddNewPostHandler = e => {
        dispatch(addPostActionCreator(newPostBody, newIconBody))
        setNewIconBody('');
        setNewPostBody('')
    }
    const removePosts = (id) => {
        dispatch(deletePost(id))
    }
    return (
        <div className={style.myPosts}>
            {
                posts?.map(post => {
                    return <div
                        className={style.img}
                    >
                        <div
                            className={style.postImage}
                        >
                            <img
                                src={post.icon}
                                className={style.image}
                            />
                        </div>
                        <div className={style.interactionBlock}>
                            <p>{post.likes}</p>
                            <p>
                                <MyButton>
                                    <BiLike/>
                                </MyButton>
                            </p>
                            <p>
                                <MyButton>
                                    <TiMessage/>
                                    Коментарии
                                </MyButton>
                            </p>
                        </div>
                        <div
                            className={style.active}
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
            {editMode
                ? <div>
                    <MyButton
                        onClick={onAddNewPostHandler}
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
                : <div
                >
                    <MyButton
                        onClick={onSwitchMode}
                        onBlur={onSwitchMode}
                    >
                        Создать пост
                    </MyButton>
                </div>
            }

        </div>
    );
}
    ;

    export default Profile;
