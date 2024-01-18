'use server';
import z from 'zod';
import { redirect } from 'next/navigation';

import { verifyPassword } from '@/lib/bcrypt';
import { login } from '@/auth';
import { SignInSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { AuthError } from 'next-auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

/**
 * Server action for signing in user
 * @param formData
 * @returns
 */
export async function signIn(
  values: z.infer<typeof SignInSchema>,
  callbackUrl?: string,
) {
  const validatedFields = SignInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: 'Email does not exists!' };
  }

  // if there is a user but no hashed password tell user to login with there original method

  // password check
  const isPasswordValid = await verifyPassword(password, existingUser.password);

  if (!isPasswordValid) {
    return { error: 'Invalid credentials!' };
  }
  try {
    // handle token and email sending here
    await login('credentials', {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials!' };
        default:
          return { error: 'Something went wrong!' };
      }
    }
    // throw and error to redirect
    throw error;
  }
}
