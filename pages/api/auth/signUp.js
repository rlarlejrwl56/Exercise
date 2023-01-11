import prisma from '../../../lib/prisma';
import { hash } from 'bcryptjs';

export default async function signUp(req, res) {
    const user = req.body;
    try {
        const createUser = await prisma.user.create(
            {
                data :
                    {
                        email : user.email,
                        password : await hash(user.password, 12),
                        size : user.size
                    }
            });
        res.status(201).json({
            message : 'Success'
        })
    }catch (error){
        console.log(error);
    }
}
