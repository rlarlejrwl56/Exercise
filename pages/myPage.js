import MyPageContainer from '../components/mypage/MyPageContainer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const myPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    if(status !== 'authenticated'){
        router.push('/');
    }
    return (
        <MyPageContainer />
    )
}

export default myPage;