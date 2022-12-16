import TopBar from "../components/common/TopBar";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Home() {
    const { data: session, status } = useSession();
    if(status === "authenticated"){
        return(
            <>
            <div>
                {session.user.name}
                <br/>
                {session.user.image}
                <img src={session.user.image} width={800}/>
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
