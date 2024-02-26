import type { NextAuthConfig } from 'next-auth';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { verifyPassword } from '@/lib/bcrypt';
import { prisma } from '@/lib/prisma';

export default {
  providers: [
    Google({
      allowDangerousEmailAccountLinking: true,
    }),
    Github({
      allowDangerousEmailAccountLinking: true,
    }),
    Credentials({
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

        if (
          typeof credentials.email !== 'string' ||
          typeof credentials.password !== 'string'
        )
          return null;

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
} satisfies NextAuthConfig;
