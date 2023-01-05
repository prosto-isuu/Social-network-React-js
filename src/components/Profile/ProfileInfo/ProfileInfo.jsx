import React from 'react'
import s from './ProfileInfo.module.css'

const name = [
    {age:12, name:'Party'},
    {age:13, name:'Color'},
    {age:14, name:'Grid'},
    {age:15, name:'Number'},
]

const getName = name.map((name) => {
    return name.name + 12
})

console.log(getName)

function ProfileInfo(props) {
    return (
        <div className={s.myPosts}>
                <div>
                    <img src="https://i.ibb.co/285sgtC/iphone-14-pro-finish-unselect-gallery-1-202209-GEO-US-removebg-1.png"/>>
                </div>
            <div className={s.post}>
                Add like
            </div>
            <div className={s.post}>Post 1</div>
            <div className={s.description}> Ava Top!</div>
            <input type='checkbox'/>
        </div>
    )
}

export default ProfileInfo;