import React from 'react'
import s from './Music.module.css'

function Music(props) {
    console.log(props ,'rgrgrg')

    return(
        < div>< h1>
            Hello {props.music.name}
        < / h1>< / div>
    )
}

export default Music;