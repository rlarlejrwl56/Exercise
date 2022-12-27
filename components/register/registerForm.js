import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {filedChange} from "../../store/slices/loginSlice";
import {useState, useRef} from 'react';
import PopUpSize from './popUpSize';
import {faPlus, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Terms from './Terms';

const registerForm = () => {
    const [openSize, setOpenSize] = useState(false);
    const [size, setSize] = useState('');
    const {userInfo} = useSelector(({loginInfo}) => ({
        userInfo: loginInfo
    }));

    const [choice, setChoice] = useState(
        {
            option1 : false,
            option2 : false,
            option3 : false,
            optionAll : false,
        }
    )
    const dispatch = useDispatch();
    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            filedChange({
                    form: 'register',
                    key: name,
                    value
                }
            )
        );
    };
    const onClickPop = () => {
        if (size !== '') {
            setSize(size);
        }
        setOpenSize(true);
    }

    return (
        <div className="md:container md:mx-auto flex justify-center z-0">
            <div className=" py-28 text-center w-96 ">
                <h1 className="font-semibold text-3xl">회원가입</h1>
                <div>
                    <div className="pt-16 w-full text-left">
                        <h2 className="font-normal text-sm">이메일 주소*</h2>
                        <input type="email" placeholder="예)Kream@Kream.co.kr"
                               className="border-b-2 font-thin w-full h-10 focus:login-focus" name='userId'
                               onChange={onChange}/>
                    </div>
                    <div className="pt-8 w-full text-left">
                        <h3 className="font-normal text-sm">비밀번호*</h3>
                        <input type="password" placeholder="영문, 숫자, 특수문자 조합 8-16자"
                               className="border-b-2 font-thin w-full h-10 focus:login-focus" name='password'
                               onChange={onChange}/>
                    </div>
                    <div className="pt-8 w-full text-left ">
                        <h3 className="font-normal text-sm">신발 사이즈</h3>
                        <div className='flex border-b-2 items-center'>
                            <button className=" font-thin w-full h-10 focus:login-focus text-start font-medium"
                                    name='size' onClick={() => onClickPop()}>
                                {(size === '') ? (<p className='text-gray-400 font-thin'>선택하세요</p>) : (size)}
                            </button>
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </div>
                    </div>
                   <Terms />
                    <div className="pt-8 w-full ">
                        <button className="border-2 w-full h-12 rounded-lg font-bold text-white"
                                style={{backgroundColor: '#ebebeb', borderColor: '#ebebeb'}}>가입하기
                        </button>
                    </div>
                </div>
                {openSize ? (
                    <PopUpSize openSize={openSize} size={size} setOpenSize={setOpenSize} setSize={setSize}/>) : null}
            </div>
        </div>
    )
}

export default registerForm;