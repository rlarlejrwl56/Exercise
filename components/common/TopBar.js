import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../store/slices/loginSlice";
import {useState} from "react";
import SearchForm from "../search/searchForm";
export default function TopBar(){
    const isLogin = useSelector(state => state.isLogin);
    const dispatch = useDispatch();
    const [searchOn, setSearchOn] = useState(false);
    const onClickLogOut = () =>{
        dispatch(logOut());
    }
    const onClickSearch = () => {
        setSearchOn(true);
    }
    return (
        <div className="outline-black z-0 relative">
            <div className="flex flex-row justify-end space-x-6 h-8  text-sm text-gray-400 font-thin pr-4 items-center max-md:hidden">
                <div>고객센터</div>
                <div>관심상품</div>
                <Link href='/myPage' className="hover:text-black">마이페이지</Link>
                {(isLogin) ? <div className="hover:text-black cursor-pointer" onClick={onClickLogOut}>로그아웃</div> : <Link href='/login' className="hover:text-black">로그인</Link>}
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
