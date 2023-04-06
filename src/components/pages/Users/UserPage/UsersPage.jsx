import React, {useEffect} from 'react';
import style from './UserPage.module.css'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getStatus, getUserProfile} from "../../../../redux/profile-reducer";
import Status from "../../../UI/StatusBar/Status";

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
            <h1>
                @{profile?.fullName}
            </h1>
            <Status
                status={status}
            >

            </Status>
            <h3>
                Обо мне: {profile?.aboutMe || 'Нету описания'}
            </h3>
            <img
                className={style.userImage}
                src={profile?.photos?.small || 'https://i.pinimg.com/564x/ac/56/85/ac5685e0258ed5a4f0786042a56814d9.jpg'}
                alt="user image"
            />
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
    );
};

export default UsersPage;