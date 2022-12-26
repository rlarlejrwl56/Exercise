import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {filedChange} from "../../store/slices/loginSlice";
import { useState } from 'react';
import PopUpSize from './popUpSize';


const registerForm = () => {
    const [openSize, setOpenSize] = useState(false);
    const [size, setSize] = useState('');
    const {userInfo} = useSelector(({loginInfo}) => ({
        userInfo : loginInfo
    }));
    const dispatch = useDispatch();
    const onChange = e =>{
        const {value, name} = e.target;
        dispatch(
            filedChange({
                    form : 'register',
                    key: name,
                    value
                }
            )
        );
    };
    const onClickPop = () => {
        if(size !== ''){
            setSize(size);
        }
        setOpenSize(true);
    }

    return (
            <div className="md:container md:mx-auto flex justify-center  ">
                <div className=" py-28 text-center w-96 z-0">
                    <h1 className="font-semibold text-3xl">회원가입</h1>
                    <div>
                        <div className="pt-20 w-full text-left">
                            <h2 className="font-normal text-sm">이메일 주소*</h2>
                            <input type="email" placeholder="예)Kream@Kream.co.kr" className="border-b-2 font-thin w-full h-10 focus:login-focus" name='userId'  onChange={onChange}/>
                        </div>
                         <div className="pt-8 w-full text-left">
                            <h3 className="font-normal text-sm">비밀번호*</h3>
                            <input type="password" className="border-b-2 font-thin w-full h-10 focus:login-focus" name='password'  onChange={onChange}/>
                         </div>
                        <div className="pt-8 w-full text-left ">
                            <h3 className="font-normal text-sm">신발 사이즈</h3>
                            <button className="border-b-2 font-thin w-full h-10 focus:login-focus text-start font-medium" name='size'  onClick={()=>onClickPop()} >
                                {size}
                            </button>
                        </div>
                        <div className="pt-8 w-full ">
                            <button className="border-2 w-full h-12 rounded-lg font-bold text-white" style={{backgroundColor : '#ebebeb', borderColor : '#ebebeb'}}>가입하기</button>
                        </div>
                    </div>
                    {openSize ? (<PopUpSize openSize={openSize} size={size} setOpenSize={setOpenSize} setSize={setSize} />) : null}
                </div>
            </div>
    )
}

export default registerForm;