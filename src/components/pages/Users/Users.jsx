import React, {useEffect, useState} from "react";
import {follow, getUsers, unfollow} from "../../../redux/users-reducers";
import style from './Users.module.css'
import {useDispatch, useSelector} from "react-redux";
import MyButton from "../../UI/Button/MyButton";


const Users = (props) => {

    const users = useSelector(state => state.Users.users)
    const dispatch = useDispatch()
    const onFollowHandle = (userId, put) => {
        console.log( put)
        dispatch(follow(userId))
    }
    const onUnsubscribeHandle = (userId) => {
        console.log(userId)
        dispatch(unfollow(userId))
    }

    useEffect(() => {
        dispatch(getUsers())
    }, [])


    return (
        <div className={style.userContainer}>
            {
                users?.map(user => {
                    return <div
                        key={user.id}
                        className={style.user}
                    >
                        <div className={style.aboutUser}>
                            <img
                                className={style.image}
                                src={user
                                    ? "https://i.ibb.co/Ht3THKM/Screen-Shot-2023-04-04-at-13-31-06.png"
                                    : null
                                }
                                alt="user-photo"
                            />
                            <div
                                className={style.usersInfo}>
                                <div>
                                    {user.name}
                                </div>
                                <div>
                                    {user.status}
                                </div>
                            </div>
                        </div>
                        <div
                            className={style.interactionBlock}
                        >
                            <div
                                className={style.followBlock}
                            >
                                {
                                    user.followed
                                        ? <MyButton
                                            onClick={e => onFollowHandle(user.id, user.followed)}
                                        >
                                            Отписаться
                                          </MyButton>
                                        : <MyButton
                                            onClick={e => onUnsubscribeHandle(user.id)}
                                        >
                                            Подписаться
                                          </MyButton>
                                }
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Users;