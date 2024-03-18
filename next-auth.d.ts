import { UserRole } from '@prisma/client';
import NextAuth, { type DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

export type ExtendedUser = DefaultSession['user'] & {
  id: string;
};

declare module 'next-auth' {
  interface Session {
    /** The user's postal address. */
    user: ExtendedUser;
  }
}
