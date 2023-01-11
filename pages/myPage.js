import MyPageContainer from '../components/mypage/MyPageContainer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const myPage = () => {
    return (
        <MyPageContainer />
    )
}

export default myPage;