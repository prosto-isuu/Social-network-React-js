import React, {useEffect, useState} from "react";
import s from "./Users.module.css";
import UserPhoto from '../assets/images/dogStyle.jpeg'
import axios from "axios";
import {NavLink} from "react-router-dom";
//
// const Users = (props) => {
//
//     const mappingUser = props.users( i => {
//     return <div>
//         <div>
//             Hello world!
//         </div>
//     </div>}
//     )}
//     return(
//         <div>
//             <div className={s.Users}>
//                 {pages.map( i => { return <span className={props.CurrentPage === s.selectedPage } onClick={
//                     () => {props.onChanged(i)}}>{i}</span>})}
//                 {
//                     props.users.map( u => { <div key={u.id}></div>
//
//                     })
//                 }
//             </div>
//         </div>
//     )
// }
// const mappingUsers =
// let pagesCount = Math.ceil()
// let pages = []
// for (let i = 0; i <= pagesCount; i++) {
//     pages.push(i)
// }
// const mappinUsers = props.users.map( i => {
//     return <div>
//         <div className={s.usersBlock}>
//             <img src={UserPhoto? i = null : UserPhoto}/>
//             <h1>{props.name}</h1>
//         </div>
//         <div className={s.InfoBlock}>
//             <div>
//                 <div>
//                     Info will be here!
//                 </div>
//             </div>
//             <div></div>
//         </div>
//     </div>
// })
// totalCount = 10  / pageSize = 5
const Users = (props) => {
    // let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    // let pages = []
    // for (let i = 0; i <= pagesCount; i++) {
    //     pages.push(i);
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then( response => {
            setData(response.data)

        })
    })
    // console.log(data)
    const mappingUsers = data.map( i => {
        return <div>
        <div className={s.usersBlock}>
            <div>
                <div className={s.imgBlock}>
                    <NavLink>
                    <img src={UserPhoto} />
                    </NavLink>
                </div>
            </div>
            <div className={s.userAndStatus}>
                <div>
                    <h1 className={s.name}>{i.name}</h1>
                    <div className={s}>{i.username}</div>
                </div>
                <div>
                    <h2 className={s.usersRegion}>Email: {i.email}  country: {i.address.city ? i.address.city : "Bishkek"}</h2>
                </div>
            </div>
        </div>

        </div>
    })
    return(
        <div>
            <div className={s.span}>
                {mappingUsers}
                <span className={s.spanchik}>1</span>
                <span className={s.spanchik}>2</span>
                <span className={s.spanchik}>3</span>
            </div>
            {/*{mappingUsers}*/}
        </div>

    )
}

export default Users;