import React from "react";
import MyGallery from "./OtherPosts/OtherPosts";
import s from './Post.module.css'
import OtherPostsContainer from "./OtherPosts/OtherPostsContainer";


const Post = (props) => {
    return(
        <div className={s.Post}>
            <MyGallery/>
            <OtherPostsContainer/>
        </div>
    )
}

export default Post;