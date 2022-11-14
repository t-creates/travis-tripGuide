import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectToDb from '@/database/db';

import { findUserByEmail } from '@/database/services/user.service';
import { passwordCompare } from '@/database/utils/tools';


export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await connectToDb();

        // check if user exists
        const user = await findUserByEmail(credentials.email, '+password');
        if (!user) {
          throw new Error('No email was found');
        }
          
        // password check
        if(!(await passwordCompare(credentials.password, user.password))) {
          throw new Error('Password is incorrect');
        }
        return { email: user.email };
      },
    }),
  ],
});