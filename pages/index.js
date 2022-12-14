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
                {session.user.email}
            </div>
        <button onClick={() => signOut({redirect: false, callbackUrl: 'http://localhost:3000/login'})}>로그아웃</button>
            </>
                )
    }
  return (
    <div>
      <div >
        <button onClick={()=>signIn()} >카카오 로그인</button>
      </div>
    </div>
  )
}
