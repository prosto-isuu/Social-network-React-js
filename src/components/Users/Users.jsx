import React from "react";
import s from './Users.module.css'


const Users = ({users, props}) => {
    const usersMap = users.items.map( (value, index, array) => {
        return  <div className={s.usersBlock}>
            <div className={s.infoBlock}>
                <div className={s.imageBar}><img src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-of-default.jpg"
                                                 alt="user-photo" /></div>
                <div className={s.usersInfo}>
                    <div>
                        {`@${value.name}`}
                    </div>
                    <div>
                        {`Status: ${value.status}`}
                    </div>
                </div>
            </div>
            <div className={s.interactionBlock}>
                <div className={s.followBlock} onClick={() => {
                    debugger;
                    if(value.followed === false) {
                        props.follow(value.id)
                    } else {
                        props.unfollow(value.id)
                    }
                }}><button>
                    {value.followed? 'Отписаться' : 'Подписаться'}
                </button></div>
            </div>
        </div>
    })

    return(
        <>
            <h1>Hello Users!</h1>
            {usersMap}
        </>
    )
}


export default Users;