import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

import { prisma } from '@/lib/prisma';
import { verifyPassword } from '@/lib/argon2';

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: <string>process.env.GOOGLE_CLIENT_ID,
      clientSecret: <string>process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    GithubProvider({
      clientId: <string>process.env.GITHUB_CLIENT_ID,
      clientSecret: <string>process.env.GITHUB_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email:',
          type: 'email',
          placeholder: 'your-awesome-username',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // check to see if user exists
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        // check passwords match
        const isMatch = verifyPassword(
          user.hashedPassword!,
          credentials?.password,
        );

        if (!isMatch) {
          return null;
        }

        return user;
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: 'jwt',

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  pages: {
    signIn: '/signin',
  },
};
