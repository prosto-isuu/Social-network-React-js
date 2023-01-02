import React from 'react'
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
      <div className={s.myPosts}>
          My posts
          <div>
              <div><img src="https://i.ibb.co/285sgtC/iphone-14-pro-finish-unselect-gallery-1-202209-GEO-US-removebg-1.png"/>></div>
          </div>
          <div className={s.item}>

                  Add like
          </div>
          <div className={s.item}>Post 1</div>
          <input type='checkbox' />
      </div>
    )
}

export default MyPosts;