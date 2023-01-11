import { hash } from 'bcryptjs';

export default async function signIn(req, res) {
    const user = req.body;
    try {
        const hashPw = await prisma.user.findUnique({
            where : {
                email : user.email
            },
            select : {
                password : true
            }
        });
        const check = await hash.compare(user.password, hashPw);
        if(check){
            return true;
        }else {
            return false;
        }
    }catch (error){
        console.log(error);
    }
}