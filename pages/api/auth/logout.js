import axios from 'axios';
async function kakaoSignOut(req,res){
  /* if(req.query.type === 'naver'){
        Serverurl = `https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=${process.env.NAVER_CLIENT_ID}&client_secret=${process.env.NAVER_CLIENT_SECRET}&access_token=${req.query.accessToken}&service_provider=NAVER`;
   }*/
    const result = await axios.post(
        `https://kapi.kakao.com/v1/user/logout?target_id_type=user_id&target_id=${req.query.userId}`,
        {},
        {
            headers: {
                Authorization: `KakaoAK ${process.env.KAKAO_AK}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );
    if (result.status == 200) {
        //logged out successfully
        res.redirect("/");
    }
}

async function naverSignOut(req,res) {
    const result = await axios.post(
        `https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=${process.env.NAVER_CLIENT_ID}&client_secret=${process.env.NAVER_CLIENT_SECRET}&access_token=${req.query.accessToken}&service_provider=NAVER`
    );
    if(result.status == 200){
        res.redirect("/");
    }
}

export default async function logout(req, res) {
    try {
        if(req.query.type === 'kakao'){
            await kakaoSignOut(req, res);
        }
        if(req.query.type === 'naver'){
            await naverSignOut(req, res);
        }
    }catch (error){
        console.log(error);
        res.status(error.status || 400).end(error.message);
    }
}