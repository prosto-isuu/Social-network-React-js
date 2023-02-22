import React, {useEffect, useState} from 'react'
import s from './MyPosts.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setPostFromProfile} from "../../../redux/profile-reducer";
import axios from "axios";
import { BiLike } from 'react-icons/bi';
import { TfiCommentAlt } from 'react-icons/tfi';



const MyPosts = (props) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const response = axios.get("https://jsonplaceholder.typicode.com/posts").then( res => {
            setPosts(res.data)
        })
       
        
    }, [])

    const transformationPosts = posts.map((value, index, array) => {
        return <div>
            <div className={s.img}>
        <img src="https://4kwallpapers.com/images/walls/thumbs_3t/5865.jpg"/>
        <div className={s.interactionBlock}>
            <div><button><BiLike/>{`Нравится | ${value.id}`}</button></div>
            <div><button><TfiCommentAlt/>{`Комментарии | ${value.title}`}</button></div>
        </div>
        <div className={s.active}>
            <div>
                <textarea name="" id="" cols="50"></textarea>
            </div>
        </div>
    </div>
        </div>
    })

    return (
        <div className={s.myPosts}>
    <div className={s.img}>
        <img src="https://4kwallpapers.com/images/walls/thumbs_3t/5865.jpg"/>
        <div className={s.interactionBlock}>
            <div><button><BiLike/>{`Нравится | ${props.id}`}</button></div>
            <div><button><TfiCommentAlt/>{`Комментарии | ${props.count}`}</button></div>
        </div>
        <div className={s.active}>
            <div>
                <textarea name="" id="" cols="50"></textarea>
            </div>
        </div>
    </div>
    {transformationPosts}
        </div>

    );
};
export default MyPosts;