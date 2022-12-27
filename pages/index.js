import TopBar from "../components/common/TopBar";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from 'react';
export default function Home() {
    const { data: session, status } = useSession();
    useEffect(() => {
        return () => {
            if(status==='authenticated'){
            }
        };
    }, [status]);

    if(status === "authenticated"){
        return(
            <>
            <div>
                {session.user.name}
                <br/>
                {session.provider}
            </div>
        <button onClick={() => signOut('kakao')}>로그아웃</button>
            </>
                )
    }
  return (
    <div>
      <div >
        <button onClick={()=>signIn('kakao')} >카카오 로그인</button>
      </div>

    </div>
  )
}
