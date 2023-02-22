import React from 'react';
import Status from "../../command/Status";
import s from './ProfileInfo.module.css'
import { RiLiveLine } from 'react-icons/ri';
import { FaRegImage } from 'react-icons/fa';
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs';
const ProfileInfo = (props) => {
    console.log(props)
    return (
        <div>
            <div className={s.navbar}>
                <div className={s.statusBar}>
                    <div>
                        <img src="https://kratkoebio.ru/wp-content/uploads/2020/04/billyava.jpg" alt="henry"/>
                    </div>
                    <div>
                        <Status status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                </div>
                <div className={s.inlineBlock}>
                    <div><RiLiveLine/>Live video</div>
                    <div><FaRegImage/>Photo video</div>
                    <div><BsFillEmojiHeartEyesFill/>Feeling</div>
                    <div><button>Post</button></div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;