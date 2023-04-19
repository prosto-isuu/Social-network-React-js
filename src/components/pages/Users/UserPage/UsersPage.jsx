import React, {useEffect} from 'react';
import style from './UserPage.module.scss'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getStatus, getUserProfile} from "../../../../redux/profile-reducer";
import Status from "../../../UI/StatusBar/Status.tsx";

const UsersPage = () => {

    const profile = useSelector(state => state.Profile.profile)
    const status = useSelector(state => state.Profile.status)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getStatus(params.id))
        dispatch(getUserProfile(params.id))
    }, []) // - Тут я изпользую анолого метода componentDidMount

    const params = useParams();

    return (
        <div
            className={style.userProfile}
        >
            <div className={style.userPhoto}>
                <img
                    className={style.userImage}
                    src={profile?.photos?.small || 'https://i.pinimg.com/564x/7b/1c/22/7b1c2242284782a94f313633d059cade.jpg'}
                    alt="user image"
                />
            </div>
            <div className={style.userInfo}>
                <h1>
                    @{profile?.fullName}
                </h1>
                <Status
                    status={status}
                />
                <h3>
                    Обо мне: {profile?.aboutMe || 'Нету описания'}
                </h3>

                <ul
                    className={style.contacts}
                >
                    <li
                        className={style.contact}
                    >
                        Facebook:{profile?.contacts?.facebook  || ' Не указан'}
                    </li>
                    <li
                        className={style.contact}
                    >
                        Vk:{profile?.contacts?.vk || ' Не указан'}
                    </li>
                    <li
                        className={style.contact}
                    >
                        Instagram:{profile?.contacts?.instagram || ` Не указан`}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UsersPage;