import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';
import { JWT_SECRET, CLIENT_ID, CLIENT_SECRET } from '../../../config/keys';

const NEXTAUTH_URL = 'http://localhost:3000';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET
    })
  ],

  secret: JWT_SECRET
});
