import React from 'react'
import s from './DialogsMessageBar.module.css'

function DialogsBar(props) {
    console.log(props)
    debugger;
    const transformationUsers = props.users.map((value, index, array) => {
        return <div className={s.usersMessages}>
            <div className={s.avatarBlock}><img src="https://i.pinimg.com/originals/45/7c/e4/457ce410579ffaec6b00a31e81cc9a8a.jpg" alt="" /></div>
            <div className={s.info}>
                <div>{`@${value.name}`}</div>
                <div>{value.id}</div>
                </div>
        </div>
    } )
  return (
    <div>
        {transformationUsers}
    </div>
  )
}

export default DialogsBar;
