// import React from 'react';
// import {Formik} from "formik";
//
// const usersSearchFormValidate = values => { /* Функция для валидации */
//     const errors = {};
//     return errors;
// };
//
// type UsersSearchFormType = {
//     term:string;
// }
//
// const UserSearch = () => {
//
//     const submit = (values:UsersSearchFormType, { setSubmitting }: {setSubmitting}) => {
//         /* Выше указон тип для деструктуризации */
//         setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//         }, 400);
//     };
//
//     return (
//         <div>
//             <Formik
//                 initialValues={{ term: ''}}
//                 validate={usersSearchFormValidate}
//                 onSubmit={submit}
//             >
//                 {({
//                       values,
//                       errors,
//                       touched,
//                       handleChange,
//                       handleBlur,
//                       handleSubmit,
//                       isSubmitting,
//                       /* and other goodies */
//                   }) => (
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="text"
//                             name="term"
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             value={values.email}
//                         />
//                         {errors.email && touched.email && errors.email}
//                         {/*<input*/}
//                         {/*    type="text"*/}
//                         {/*    name="tem"*/}
//                         {/*    onChange={handleChange}*/}
//                         {/*    onBlur={handleBlur}*/}
//                         {/*    value={values.password}*/}
//                         {/*/>*/}
//                         {errors.password && touched.password && errors.password}
//                         <button type="submit" disabled={isSubmitting}>
//                             Submit
//                         </button>
//                     </form>
//                 )}
//             </Formik>
//         </div>
//     );
// };
//
// export default UserSearch;