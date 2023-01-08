import s from "./DialogsItems.module.css";
import {NavLink} from "react-router-dom";


export const DialogsItem = (props) => {
    return(
        <div className={s.item}>
            <div className={s.navlink}>
                <img src="https://tipik.ru/wp-content/uploads/2019/08/%D0%9F%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD-015.jpg" alt="" className={s.profileImg}/>
                <NavLink to={'dialogs' + props.posts[0].id} className={s.navlink}>{props.posts[0].name}</NavLink>
            </div>
            <div className={s.navlink}>
                <img src="https://tipik.ru/wp-content/uploads/2019/08/%D0%9F%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD-015.jpg" alt="" className={s.profileImg}/>
                <NavLink to={'dialogs' + props.posts[1].id} className={s.navlink}>{props.posts[1].name}</NavLink>
            </div>
            <div className={s.navlink}>
                <img src="https://tipik.ru/wp-content/uploads/2019/08/%D0%9F%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD-015.jpg" alt="" className={s.profileImg}/>
                <NavLink to={'dialogs' + props.posts[2].id} className={s.navlink}>{props.posts[2].name}</NavLink>

            </div>
            <div className={s.navlink}>
                <img src="https://tipik.ru/wp-content/uploads/2019/08/%D0%9F%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD-015.jpg" alt="" className={s.profileImg}/>
                <NavLink to={'dialogs' + props.posts[3].id} className={s.navlink}>{props.posts[3].name}</NavLink>

            </div>
        </div>
    )}

