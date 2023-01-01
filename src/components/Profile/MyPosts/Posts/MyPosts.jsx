import React from 'react'
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
      <div className={s.myPosts}>
          My posts
          <div>
              <div>New post</div>
          </div>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 1</div>
      </div>
    )
}

export default MyPosts;