import React from 'react'
import s from './SidebarFriends.module.css'

export const SidebarFriends = (props) => {
    return (
        <div className={s.sidebar}>
            <div className={s.title}>
                Ваши друзья
            </div>
            <div className={s.images}>
                <img src="https://pm1.narvii.com/6857/8a2d4a8fe31b643fdc79925b12d36ef3b5d427cfv2_hq.jpg"
                     className={s.logo}/>
                <p>{props.name[0].name}</p>
                <img src="https://pm1.narvii.com/6857/8a2d4a8fe31b643fdc79925b12d36ef3b5d427cfv2_hq.jpg"
                     className={s.logo}/>
                <p>{props.name[1].name}</p>
                <img src="https://pm1.narvii.com/6857/8a2d4a8fe31b643fdc79925b12d36ef3b5d427cfv2_hq.jpg"
                     className={s.logo}/>
            </div>
        </div>
    )
}
