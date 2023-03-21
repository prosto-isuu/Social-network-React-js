import React from "react";
import s from './Users.module.css'


const Users = ({users, follow, unfollow, }) => {

    return(
        <div>
            {
                users.map( user => {

                    const onFollowHandle = (i) => {
                        if(user.followed === false) {
                            follow(i.id)
                        } else if (user.followed === true) {
                            unfollow(i.id)
                        }
                    }
            
                    return  <div className={s.usersBlock}>
                        <div className={s.infoBlock}>
                                <div className={s.imageBar}>
                                    {user.photos.small? (
                                        <img src={user.photos.small} alt="user-photo" />
                                    ) : (
                                        <img src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-of-default.jpg" alt="user-photo" />    
                                    )}
                                </div>
                            <div className={s.usersInfo}>
                                <div>
                                    {`@${user.name}`}
                                </div>
                                <div>
                                    {`Status: ${user.status}`}
                                </div>
                            </div>
                        </div>
                        <div className={s.interactionBlock}>
                            <div className={s.followBlock}>
                                {user.followed? (
                                    <button onClick={() => onFollowHandle(user.id)}>
                                        Отписаться
                                    </button>
                                ) : (
                                    <button onClick={() => onFollowHandle(user.id)}>
                                        Подписаться
                                    </button>
                                )}
                        
                            </div>
                        </div>
                    </div>
                })
            }

        </div>
    )
}


export default Users;