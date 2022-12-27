import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../store/slices/loginSlice";
import {useState, useEffect} from "react";
import SearchForm from "../search/searchForm";
import {useSession, signOut} from 'next-auth/react';

export default function TopBar(){
    //const isLogin = useSelector(state => state.isLogin);
    const [isLogin, setIsLogin] = useState(false);
    const dispatch = useDispatch();
    const { data: session, status, token } = useSession();
    const [searchOn, setSearchOn] = useState(false);
    const [signOutUrl, setSignOutUrl] = useState('');
    const onClickSearch = () => {
        setSearchOn(true);
    }
    /*useEffect(() => {
       if(status === 'authenticated'){

       }
    }, [status]);*/


    return (

        <div className="outline-black z-0 fixed top-0 w-screen bg-white z-40">
            <div className="flex flex-row justify-end space-x-6 h-8  text-sm text-gray-400 font-thin pr-4 items-center max-md:hidden">
                <div>고객센터</div>
                <div>관심상품</div>
                {(status === 'authenticated') ? <Link href='/myPage' className="hover:text-black">마이페이지</Link> : <Link href='/login'className="hover:text-black">마이페이지</Link>}
                {(status === 'authenticated') ? <div className="hover:text-black cursor-pointer" onClick={()=>signOut()}>로그아웃</div> : <Link href='/login' className="hover:text-black">로그인</Link>}
            </div>
            <div className="flex bg-white border h-16 border-slate-200 px-6 items-center">
                   <h1 className="font-bold font-size text-2xl italic">
                       <Link href='/'>KREAM</Link>
                   </h1>
                    <div className="ml-auto xl">
                   <nav className='flex space-y-4 align-center grow h-14 space-x-14 list-none max-md:hidden'>
                   <li className='pt-4'>
                        STYLE
                   </li>
                   <li>
                       SHOP
                   </li>
                   <li>
                       ABOUT
                   </li>
                   <li>
                       <button onClick={onClickSearch}><FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/></button>
                   </li>
                   </nav>
                        <nav className='flex align-center grow h-14 space-x-10 list-none md:hidden'>
                            <button onClick={onClickSearch}><FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/></button>
                            <button><FontAwesomeIcon icon={faBars} size='2xl'/></button>
                        </nav>
                    </div>
               </div>
            {searchOn ? (<SearchForm setSearchOn={setSearchOn}/>) : null}
        </div>
    )
}
