import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect, useRef, useCallback} from "react";
import {asyncLoginFetch} from '../../store/slices/loginSlice';
import {useRouter} from "next/router";
import NewWindow from 'react-new-window';
import {useDidMountEffect} from "../../hooks/useDidMountEffect";
import Image from 'next/image';
import {signIn, useSession} from 'next-auth/react';
import {emailCheck, pwdCheck} from '../../hooks/InputValidation';
import Swal from 'sweetalert2';

const loginForm = () => {
   const [email, setEmail] = useState('');
   const [popup, setPopUp] = useState(false);
   const [password, setPassword] = useState('');
   const [ isEmail, setIsEmail ] = useState(true);
   const [ isPassword, setIsPassword ] = useState(true);
   const [prePage, setPrePage] = useState('');
    const checkRef = useRef([]);
   const didMount = useRef(false);
   const { data: session, status } = useSession();
    const changeHandler = useCallback((e) => {
        const {name, value} = e.target;
        if(name === 'userId'){
            setEmail(value);
            if(!emailCheck(email)){
                setIsEmail(false);
            }else {
                setIsEmail(true);
            }
        }
        if(e.target.name === 'password'){
            setPassword(e.target.value);
            if(!(pwdCheck(e.target.value))){
                setIsPassword(false);
            }else {
                setIsPassword(true);
            }
        }
    },[email,password]);
   const onSubmit = async (e) => {
       e.preventDefault();
      const res = await signIn('email-password-credential', {
          email,
          password,
          redirect: false
      });
      if(res.error){
          let timerInterval
          Swal.fire({
              icon: 'warning',
              iconColor: 'red',
              position : 'top',
              background : '#222',
              color : 'white',
              width : '480px',
              fonstSize : '14px',
              showConfirmButton : false,
              text: '이메일 또는 비밀번호를 확인해주세요',
              timer: 800,
              timerProgressBar: true,
              didOpen: () => {
                  timerInterval = setInterval(() => {
                  }, 100)
              },
              willClose: () => {
                  clearInterval(timerInterval)
              }
          })
      }
   }


    useEffect(() => {
       if(didMount.current){
           setPrePage(globalThis.sessionStorage.getItem('prevPath'));
            }
        return () => didMount.current = true;

        },[status]);
    useEffect(() => {
        if(!isEmail){
            checkRef.current['idDiv'].style.color = 'red';
        }else {
            checkRef.current['idDiv'].style.color = 'black';
        }
        if(!isPassword){
            checkRef.current['pwdDiv'].style.color = 'red';
        }else {
            checkRef.current['pwdDiv'].style.color = 'black';
        }

    }, [isEmail,isPassword]);
    return (
        <div className="md:container md:mx-auto flex justify-center">
            <div className=" py-28 text-center w-96 flex-col">
                <h1 className="font-black text-4xl italic">Kream</h1>
                <p className="font-medium">KICK RULE EVERYTHING AROUND ME</p>
                <form onSubmit={onSubmit}>
                <div className="pt-20 w-full text-left" ref={(idDiv) => {
                    checkRef.current['idDiv'] = idDiv }}>
                    <h3 className="font-normal">이메일 주소</h3>
                    <label>
                        <input type="email" placeholder="예)Kream@Kream.co.kr" autoComplete='off' className="border-b-2 font-thin w-full h-10 focus:login-focus" name='userId' onChange={changeHandler}/>
                    </label>
                    {!isEmail ?  <p className='text-[6px]'>이메일 주소를 정확히 입력해주세요.</p> : null }
                </div>
                <div className="pt-8 w-full text-left" ref={(pwdDiv) => {
                    checkRef.current['pwdDiv'] = pwdDiv }}>
                    <h3 className="font-normal">비밀번호</h3>
                    <label>
                        <input type="password" className="border-b-2 font-thin w-full h-10 focus:login-focus" name='password'  onChange={changeHandler}/>
                    </label>
                    {!isPassword ? <p className='text-[6px]'>영문, 숫자, 특수문자를 조합하여 입력해주세요. (8-16자)</p> : null }
                </div>
                <div className="pt-8 w-full ">
                    {isEmail && isPassword && email !== '' && password !== ''  ?
                        <button className="border-2 w-full h-12 rounded-lg font-bold text-white"
                                style={{backgroundColor: 'black', borderColor: 'balck'}} onClick={(e)=> onSubmit(e)}>로그인
                        </button>
                        :
                        <button className="border-2 w-full h-12 rounded-lg font-bold text-white"
                                style={{backgroundColor: '#ebebeb', borderColor: '#ebebeb'}} disabled>로그인
                        </button>}
                </div>
                <ul className='flex justify-evenly pt-6 flex-1'>
                    <li className='border-r-2 w-1/3 text-sm'><Link href='/register'>이메일 가입</Link></li>
                    <li className='w-1/3 border-r-2 text-sm'><Link href='/register'>이메일 찾기</Link></li>
                    <li className='w-1/3 text-sm'><Link href='/register'>비밀번호 찾기</Link></li>
                </ul>
                </form>
                <div className='flex flex-wrap snsLoginBtn mt-10 hover:cursor-pointer ' onClick={()=>signIn('naver',{callbackUrl:`${prePage}`})} style={{background : '#03c75A'}}>
                    <div className='ml-12'>
                    <Image src={require('../../public/images/naverLogin.png')}  className='w-8' alt='naverBtn'/>
                    </div>
                    <div className='text-sm ml-20'>
                    <button >네이버 로그인</button>
                    </div>
                </div>
                    <button className='mt-3 snsLoginBtn justify-center' onClick={()=>signIn('kakao',{callbackUrl:`${prePage}`})} style={{background:'#FEE500'}}><Image src={require('../../public/images/kakao_login_medium_wide.png')} alt='kakaoBtn'/></button>
            </div>
        </div>
    )
}
export default loginForm;