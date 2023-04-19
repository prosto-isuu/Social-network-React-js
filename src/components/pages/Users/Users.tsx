import React, {FC, useEffect, useRef, useState} from "react";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    toggleIsFetching,
    unSubscribe
} from "../../../redux/users-reducers";
// @ts-ignore
import style from './Users.module.css'
import {useDispatch, useSelector} from "react-redux";
import MyButton from "../../UI/Button/MyButton";
import {useNavigate} from "react-router-dom";
import Loader from "../../UI/Loader/Loader";
import {AppStateType} from "../../../redux/store";

const Users:FC = (props) => {

    let loaderRef = useRef()
    const history = useNavigate();

    const onCrossingProfile = (id) => {
        history(`/users/${id}`)
    }
    const users = useSelector((state:AppStateType) => state.Users.users)
    const currentPage = useSelector((state:AppStateType) => state.Users.currentPage)
    const pageSize = useSelector((state:AppStateType) => state.Users.pageSize)
    const totalUsersCount = useSelector((state:AppStateType) => state.Users.totalUsersCount)
    const isFetching = useSelector((state:AppStateType) => state.Users.isFetching)
    const toggleFollowingProgress = useSelector((state:AppStateType)=> state.Users.isFetching)
    const dispatch = useDispatch()

    function createPages(pages, pagesCount, currentPage) {
        if(pagesCount > 10) {
            if(currentPage > 5) {
                for (let i = currentPage-4; i <= currentPage+5; i++) {
                    pages.push(i)
                    if(i == pagesCount) break
                }
            }
            else {
                for (let i = 1; i <= 10; i++) {
                    pages.push(i)
                    if(i == pagesCount) break
                }
            }
        }  else {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i)
            }
        }
    }

    const pages = [];

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    createPages(pages, pagesCount, currentPage)

    const onUnsubscribeHandle = (id) => {
        //@ts-ignore
        dispatch(unSubscribe(id))
    }

    const onFollowHandle = (id) => {
        //@ts-ignore
        dispatch(follow(id))
        console.log(id)
    }


    useEffect(() => {
        dispatch(toggleIsFetching(true))
        //@ts-ignore
        dispatch(getUsers(currentPage, pageSize))
        dispatch(toggleIsFetching(false))
    }, [currentPage, pageSize])

    useEffect(() => {
        console.log('Подписка')
    }, [users?.map(i => i.followed)])

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
                                onClick={e => onCrossingProfile(user.id)}
                                //@ts-ignore
                                src={user.image?.small
                                    //@ts-ignore
                                    ? user.image?.small
                                    : "https://i.pinimg.com/564x/31/27/12/312712dd9e6f02c187d2708b78d94931.jpg"
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
                                            onClick={e => onFollowHandle(user.id)}
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
            {
                isFetching
                ? <Loader/>
                : null
            }
            <div className={style.pages}>
                {pages.map((page, index) => {
                    return <span
                        className={currentPage === page? style.currentPage : style.page}
                        key={index}
                        onClick={e => dispatch(setCurrentPage(page))}
                    >
                        {index}
                    </span>
                })}
            </div>
        </div>
    )
}

export default Users;