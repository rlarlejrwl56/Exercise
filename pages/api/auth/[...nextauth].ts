import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import Kakao from 'next-auth/providers/kakao';
import prisma from '../../../lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter'


const authHandler: NextApiHandler = (req, res) => {
    NextAuth(req, res, options);
}
export default authHandler;

export const options = {
    providers: [

        Kakao({
            clientId: process.env.KAKAO_CLIENT_ID,
            clientSecret: process.env.KAKAO_CLIENT_SECRET,
        }),
        {
            id: "naver",
            name: "Naver",
            type: "oauth",
            params: {grant_type: "authorization_code"},
            authorization: "https://nid.naver.com/oauth2.0/authorize",
            token: "https://nid.naver.com/oauth2.0/token",
            userinfo: "https://openapi.naver.com/v1/nid/me",
            profile(profile) {
                return {
                    id: profile.response.id,
                    name: profile.response.nickname,
                    email: profile.response.email,
                    image: profile.response.profile_image,
                }
            },
            checks: ["state"],
            clientId: process.env.NAVER_CLIENT_ID,
            clientSecret: process.env.NAVER_CLIENT_SECRET
        },
    ],
    secret: process.env.SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },
    jwt: {
        secret: process.env.SECRET,
    },
        callbacks: {
            async jwt({ token, account }) {
                if (account) {
                    token.accessToken = account.access_token;
                    token.provider = account.provider;
                    token.userId = account.userId;
                    console.log(account);
                }
                return token;
            },
            async session({ session, token }) {
                session.accessToken = token.accessToken;
                session.provider = token.provider;
                session.userId = token.sub;
                return session;
            },
    },
    adapter: PrismaAdapter(prisma),
    pages: {
        signOut: '/'
    }
};

