// import {useSelector, useDispatch} from "react-redux";
// import LoginForm from "../Login/loginForm";
// import {useEffect} from "react";
//
// const loginContainer = () => {
//     const dispatch = useDispatch();
//     const {form} = useSelector(login=>{
//         form : login
//     }));
//
//     const onChange = e =>{
//         const { value, name } = e.target;
//         dispatch(
//             changeFiled({
//                 form : 'login',
//                 key : name,
//                 value
//             })
//         );
//     };
//     const onSubmit = e => {
//         e.preventDefault();
//     };
//
//     useEffect(()=> {
//         dispatch(initialState('login'));
//     },[dispatch]);
//
//     return (
//         <>
//             <LoginForm
//                 form={form}
//                 onChange = {onChange}
//
//         </>
//     )
// }