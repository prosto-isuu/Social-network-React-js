import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <div className={s.item}>Andrey</div>
                    <div className={s.item}>Valery</div>
                    <div className={s.item}>Antonio</div>
                    <div className={s.item}>Sergey</div>
                    <div className={s.item}>Misha</div>
                    <div className={s.item}>Honor</div>
                    <div className={s.item}>Samsung</div>
                </div>
            <div className={s.messages}>
                <div className={s.messages}>
                    Hi, i`m Dore</div>



                <div className={s.messages}>
                    <div>
                    Hello pripizduchi
                    </div>
                <div className={s.messages}>
                    Network pls
                </div>
                </div>
        </div>
        </div>
    )
}


export default Dialogs;
