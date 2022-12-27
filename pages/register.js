import ReisterForm from "../components/register/registerForm";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const register = () => {
    const { data: session, status, token } = useSession();
    const router = useRouter();
    if(status === 'authenticated'){
        router.push('/');
    }
    return (
       <ReisterForm className = 'z-0'/>
    )
}
export default register;