import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {asyncLoginFetch} from '../../store/slices/loginSlice';
import {useRouter} from "next/router";
import {useDidMountEffect} from "../../hooks/useDidMountEffect";

const loginForm = () => {
   const [userId, setUserId] = useState('');
   const [password, setPassword] = useState('');
   const  isLogin  = useSelector(state => state.isLogin);
   const status = useSelector(state => state.status);
   const dispatch = useDispatch();
   const router = useRouter();
   const onChangeUserId = e =>{
        setUserId(e.target.value);
   };
   const onChangePassword = e => {
       setPassword(e.target.value);
   }
   const onSubmit = e => {
       e.preventDefault();
       const loginInfo = {
           'userId' : userId,
           'password' : password
       }
       dispatch(asyncLoginFetch(loginInfo));
   }

    useDidMountEffect(() => {
       if(status === 'complete'){
           if(isLogin){
               router.push('/');
           }else {
               alert("아이디 또는 비밀번호가 일치하지 않습니다.");
           }
       }
    }, [status]);


    return (
        <div className="md:container md:mx-auto flex justify-center  ">
            <div className=" py-28 text-center w-96">
                <h1 className="font-black text-4xl italic">Kream</h1>
                <p className="font-medium">KICK PULE EVERYTHING AROUND ME</p>
                <form onSubmit={onSubmit}>
                <div className="pt-20 w-full text-left">
                    <h3 className="font-normal">이메일 주소</h3>
                    <input type="email" placeholder="예)Kream@Kream.co.kr" className="border-b-2 font-thin w-full h-10 focus:login-focus" name='userId' onChange={onChangeUserId} value={userId}/>
                </div>
                <div className="pt-8 w-full text-left">
                    <h3 className="font-normal">비밀번호</h3>
                    <input type="password" className="border-b-2 font-thin w-full h-10 focus:login-focus" name='password' value={password} onChange={onChangePassword}/>
                </div>
                <div className="pt-8 w-full ">
                    <button className="border-2 w-full h-12 rounded-lg font-bold text-white" style={{backgroundColor : '#ebebeb', borderColor : '#ebebeb'}}>로그인</button>
                </div>
                <ul className='flex justify-evenly pt-6 flex-1'>
                    <li className='border-r-2 w-1/3 text-sm'><Link href='/register'>이메일 가입</Link></li>
                    <li className='w-1/3 border-r-2 text-sm'><Link href='/register'>이메일 찾기</Link></li>
                    <li className='w-1/3 text-sm'><Link href='/register'>비밀번호 찾기</Link></li>
                </ul>
                </form>
            </div>
        </div>
    )
}
export default loginForm;