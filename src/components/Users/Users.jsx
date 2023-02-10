// let Users = (props) => {
//
//     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
//     let pages = [];
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i);
//     }
//     return <div>
//         <div>
//             {pages.map(p => {
//                 return <span className={props.currentPage === p && styles.selectedPage}
//                              onClick={(e) => {
//                                  props.onPageChanged(p);
//                              }}>{p}</span>
//             })}
//         </div>
//         {
//             props.users.map(u => <div key={u.id}>
//                 <span>
//                     <div>
//                        <NavLink to={'/profile/' + u.id}>
//                         <img src={u.photos.small != null ? u.photos.small : userPhoto}
//                              className={styles.userPhoto}/>
//                        </NavLink>
//                     </div>
//                     <div>
//                         {u.followed
//                             ? <button onClick={() => {
//
//                                     ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
//                                         props.toggleFollowingProgress(true, u.id);
//                                         axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
//                                             withCredentials: true,
//                                             headers: {
//                                                 "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
//                                             }
//                                         })
//                                             .then(response => {
//                                                 if (response.data.resultCode == 0) {
//                                                     props.unfollow(u.id);
//                                                 }
//                                                 props.toggleFollowingProgress(false, u.id);
//                                             });
//
//
//
//                                     }}>Unfollow</button>
//                                     : <button onClick={() => {
//
//                                     : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
//                                             props.toggleFollowingProgress(true, u.id);
//                                             axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
//                                                 withCredentials: true,
//                                                 headers: {
//                                                     @@ -63,6 +65,7 @@ let Users = (props) => {
//                                                         if (response.data.resultCode == 0) {
//                                                             props.follow(u.id);
//                                                         }
//                                                         props.toggleFollowingProgress(false, u.id);
//                                                     });

const Users = () => {
    return<>

    </>
}