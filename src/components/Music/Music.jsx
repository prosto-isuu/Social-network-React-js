import React from 'react'
import s from './Music.module.css'
import {MusicHeader} from './MusicHeader/MusicHeader'

function Music(props) {
    return(
        <div className={s.music}>
            <MusicHeader dispatch={props.music}/>
        </div>
    )
}

export default Music;