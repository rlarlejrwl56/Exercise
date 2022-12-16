import LoginForm from "../components/Login/loginForm";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const login = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    if(status === 'authenticated'){
        router.push('/')
    }
    return (

        <LoginForm/>
    )
}

export default login;