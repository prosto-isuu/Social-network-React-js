import React from 'react';
import Status from "../../command/Status";
import s from './ProfileInfo.module.css'
import { RiLiveLine } from 'react-icons/ri';
import { FaRegImage } from 'react-icons/fa';
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs';
import axios from "axios";
const ProfileInfo = (props) => {
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
                    <button>{<RiLiveLine/>}Live video</button>
                    <button><FaRegImage/>Photo video</button>
                    <button><BsFillEmojiHeartEyesFill/>Feeling</button>
                    <button>Post</button>
                </div>
            </div>
        </div>
    );
};

class ProfileInfoClass extends React.Component {
    componentDidMount() {
        axios.get("").then( response => {

        })
    }

    render() {
        return<>
        </>
    }
}


export default ProfileInfo;