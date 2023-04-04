import React, {useEffect} from 'react';
import s from './MyPosts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { BiLike } from 'react-icons/bi';
import { TiMessage } from 'react-icons/ti';
import MyButton from '../../UI/Button/MyButton';
import MyTextarea from '../../UI/Textarea/MyTextarea';
import {deletePost, setUsers} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    useEffect(() => {
        setUsers()
        console.log('brr')
    }, [])

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.Profile.posts);

    const removePosts = (id) => {
        dispatch(deletePost(id))
    }
    return (
        <div className={s.myPosts}>
            {
                posts?.map( post => {
                    return <div className={s.img}>
                        <img
                            src="https://assets.pukkelpop.be/images/band-detail/58ee815a1ea7-billie-eilish.jpg"
                            className={s.image}
                        />
                        <div className={s.interactionBlock}>
                            <MyButton>
                                <BiLike />
                            </MyButton>
                            <MyButton>
                                <TiMessage />
                                {`Комментарии | ${props.count}`}
                            </MyButton>
                        </div>
                        <div
                            className={s.active}
                        >
                            <MyTextarea/>
                            <MyButton>Добавить пост</MyButton>
                            <MyButton
                                onClick={e => removePosts(23)}
                            >
                                Удалить пост
                            </MyButton>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default MyPosts;
