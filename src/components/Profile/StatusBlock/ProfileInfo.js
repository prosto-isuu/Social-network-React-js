import React from 'react';
import Status from "../../../command/Status";
import s from './ProfileInfo.module.css'
import {RiLiveLine} from 'react-icons/ri';
import {FaRegImage} from 'react-icons/fa';
import {BsFillEmojiHeartEyesFill} from 'react-icons/bs';
import MyButton from "../../UI/Button/MyButton";
import MyPosts from "../MyPosts/MyPosts";

const ProfileInfo = (props) => {

    return (
        <div className={s.navbar}>
            <div className={s.statusBar}>
                <img
                    className={s.image}
                    src="https://kratkoebio.ru/wp-content/uploads/2020/04/billyava.jpg"
                    alt="henry"/>
                <Status status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={s.events}>
                <MyButton>
                    <RiLiveLine/>
                    Посты
                </MyButton>
                <MyButton>
                    <FaRegImage/>
                    Фото видео
                </MyButton>
                <MyButton>
                    <BsFillEmojiHeartEyesFill/>
                    События
                </MyButton>
                <MyButton>
                    Прямой эфир
                </MyButton>
            </div>
            <MyPosts/>
        </div>
    );
};

export default ProfileInfo;