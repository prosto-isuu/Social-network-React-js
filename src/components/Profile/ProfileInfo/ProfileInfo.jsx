// import React, {useState} from 'react';
// import s from './ProfileInfo.module.css';
// import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
// import userPhoto from "../../../assets/images/user.png";
// import ProfileDataForm from "./ProfileDataForm";

// const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

//     let [editMode, setEditMode] = useState(false);

//     if (!profile) {
//         return <Preloader/>
//     }

//     const onMainPhotoSelected = (e) => {
//         if (e.target.files.length) {
//             savePhoto(e.target.files[0]);
//         }
//     }

//     const onSubmit = (formData) => {
//         saveProfile(formData).then(
//             () => {
//                 setEditMode(false);
//             }
//         );
//     }

//     return (
//         <div>
//             <div className={s.descriptionBlock}>
//                 <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
//                 {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

//                 { editMode
//                     ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
//                     : <ProfileData goToEditMode={() => {setEditMode(true)} } profile={profile} isOwner={isOwner}/> }

//                 <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
//             </div>
//         </div>
//     )
// }

// const ProfileData = ({profile, isOwner, goToEditMode}) => {
//     return <div>
//         {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
//         <div>
//             <b>Full name</b>: {profile.fullName}
//         </div>
//         <div>
//             <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
//         </div>
//         {profile.lookingForAJob &&
//         <div>
//             <b>My professional skills</b>: {profile.lookingForAJobDescription}
//         </div>
//         }

//         <div>
//             <b>About me</b>: {profile.aboutMe}
//         </div>
//         <div>
//             <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
//             return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
//         })}
//         </div>
//     </div>
// }


// const Contact = ({contactTitle, contactValue}) => {
//     return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
// }

// export default ProfileInfo;


// // import React, {useState} from 'react';

import React from "react";

const ProfileInfo = (props) => {
    return(
        <>
        <h1>Hello</h1>
        </>
    )
}

export default ProfileInfo;


// // import s from './ProfileInfo.module.css'
// // import {compose} from "redux";
// // import {connect} from "react-redux";
// // import {setPosts} from "../../../redux/profile-reducer";

// // const ProfileInfo = (props) => {
// //     const [post, setPost] = useState({})
// //     const refacPosts = props.posts.map( (value, index, array) => {
// //         return <div>
// //             <div className={s.userName}>
// //                 Полное имя:{props.name? 'undefined' : 'unefined'}
// //             </div>
// //             <div>Статус: {props.status}</div>
// //             <div className={s.usersImg}>
// //                 props.img
// //             </div>
// //             <div>
// //             Ищу ли я работу: {value.lookenForJob? 'Нет' : 'Да'}
// //             </div>
// //             <div>
// //             Ищу ли я работу: {value.lookenForJob? 'Нет' : 'Да'}
// //             </div><div>
// //             Ищу ли я работу: {value.AboutMe? 'Нет' : 'Да'}
// //             </div><div>
// //             Мои проффессиональные навыки :{value.lookenForJob? 'Нет' : 'Да'}
// //             </div><div>
// //             Ищу ли я работу: {value.lookenForJob? 'Нет' : 'Да'}
// //             </div>
// //             <div className={s.activeBlock}>
// //                 <div>Написать коментарии</div>
// //                 <input type="text"/>
// //                 <button>Отправить</button>
// //             </div>
// //         </div>
// //     })

// //     const onAddPost = (event) => {
// //         setPost({body:event.target.value, id:1})
// //         console.log(props)
// //     }
// //     return (
// //         <div>
// //             <hr/>
// //             <h1 style={{textAlign:'center'}}>Посты других людей</h1>
// //             <div>
// //                 <div className={s.userName}>
// //                     props.name
// //                 </div>
// //                 <div className={s.usersImg}>
// //                     props.img
// //                 </div>
// //                 <div><b>Contacts : {Object.keys(value.contact)}</b></div>
// //                 <div className={s.activeBlock}>
// //                     <div>Написать коментарии</div>
// //                     <input type="text" onChange={onAddPost}/>
// //                     <button onClick={() => {
// //                         setPosts(post)
// //                     }}>Отправить</button>
// //                 </div>
// //             </div>
// //             {refacPosts}
// //         </div>
// //     );
// // };

// // const Contact = ({contactBody, contactValue }) => {
// //     return(
// //         <>
// //         <b>{contactBody}</b>
// //         <b>{contactValue}</b>
// //         </>
// //     )
// // }

// // const mapStateToProps = (state) => {
// //     return {
// //         posts: state.Profile.posts
// //     }
// // }

// // export default compose(
// //     connect(mapStateToProps, {setPosts})
// // )(ProfileInfo);


// // // import React from 'react';
// // // import Status from "../../../command/Status";
// // // import s from './ProfileInfo.module.css'
// // // import { RiLiveLine } from 'react-icons/ri';
// // // import { FaRegImage } from 'react-icons/fa';
// // // import { BsFillEmojiHeartEyesFill } from 'react-icons/bs';
// // // import axios from "axios";
// // // const ProfileInfo = (props) => {
// // //     return (
// // //         <div>
// // //             <div className={s.navbar}>
// // //                 <div className={s.statusBar}>
// // //                     <div>
// // //                         <img src="https://kratkoebio.ru/wp-content/uploads/2020/04/billyava.jpg" alt="henry"/>
// // //                     </div>
// // //                     <div>
// // //                         <Status status={props.status} updateStatus={props.updateStatus}/>
// // //                     </div>
// // //                 </div>
// // //                 <div className={s.inlineBlock}>
// // //                     <button>{<RiLiveLine/>}Live video</button>
// // //                     <button><FaRegImage/>Photo video</button>
// // //                     <button><BsFillEmojiHeartEyesFill/>Feeling</button>
// // //                     <button>Post</button>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };
// // //
// // // class ProfileInfoClass extends React.Component {
// // //     componentDidMount() {
// // //         axios.get("").then( response => {
// // //
// // //         })
// // //     }
// // //
// // //     render() {
// // //         return<>
// // //         </>
// // //     }
// // // }
// // //
// // //
// // // export default ProfileInfo;