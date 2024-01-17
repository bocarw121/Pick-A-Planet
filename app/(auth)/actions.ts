'use server';
import z from 'zod';
import { redirect } from 'next/navigation';

import { encryptPassword, verifyPassword } from '@/lib/argon2';
import { prisma } from '@/lib/prisma';

// Define a regular expression pattern for a valid name
const nameRegex = /^[A-Za-z\s'-]+$/; // Allows letters, spaces, hyphens, and single quotes

const registrationSchema = z.object({
  email: z.string().email('Email is required'),
  name: z.string().refine((name) => nameRegex.test(name), {
    message: 'Please enter a valid name with no special characters.',
  }),
  passwords: z
    .object({
      password: z.string().min(8, 'Password must be at least 8 characters'),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ['confirmPassword'],
    }),
});

/**
 * Server action for handling user creation
 * @param formData
 * @returns
 */
export async function signUpAction(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');

  if (!email && !password && !confirmPassword && !name) {
    return {
      message: 'You must fill in all fields',
      type: 'all',
    };
  }

  try {
    const parsedForm = registrationSchema.parse({
      email,
      name,
      passwords: {
        password,
        confirmPassword,
      },
    });

    const exists = await prisma.user.findUnique({
      where: {
        email: parsedForm.email,
      },
    });

    if (exists) {
      return {
        message: `${email} has already been registered, please login using your credentials`,
        type: 'email',
      };
    }

    const firstLetterInEmail = parsedForm.email.split('')[0];

    const image = `https://s.gravatar.com/avatar/5edc045bafe13bf1ce09c68b90b5ee9f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F${firstLetterInEmail}.png`;

    await prisma.account.create({
      data: {
        type: 'password',
        provider: 'password',
        providerAccountId: crypto.randomUUID(),
        user: {
          create: {
            name: parsedForm.name,
            email: parsedForm.email,
            hashedPassword: await encryptPassword(
              parsedForm.passwords.password,
            ),
            emailVerified: null,
            image,
          },
        },
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      for (let err of error.issues) {
        if (err.path[0] === 'name') {
          return { message: err.message, type: err.path[0] };
        }
        if (err.path[0] === 'email') {
          return { message: err.message, type: err.path[0] };
        }

        if (err.path[1] === 'password') {
          return { message: err.message, type: err.path[1] };
        }

        if (err.path[1] === 'confirmPassword') {
          return { message: err.message, type: err.path[1] };
        }
      }
    }
    return {
      message: 'Something went wrong, please try again later',
      type: 'all',
    };
  }

  redirect('/signin');
}

const signInSchema = z.object({
  email: z.string().email('Email is required'),
  password: z.string({ required_error: 'You must enter a valid password' }),
});

/**
 * Server action for signing in user
 * @param formData
 * @returns
 */
export async function signInAction(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (!email && !email) {
    return { message: 'You must fill in all fields', type: 'all' };
  }

  if (!email) {
    return { message: 'You must enter a valid email', type: 'email' };
  }

  if (!password) {
    return { message: 'You must enter a valid password', type: 'password' };
  }

  try {
    const parsedForm = signInSchema.parse({
      email,
      password,
    });

    const user = await prisma.user.findUnique({
      where: {
        email: parsedForm.email,
      },
    });

    if (!user) {
      return { message: 'Invalid email/password', type: 'all' };
    }

    // if there is a user but no hashed password tell user to login with there original method

    if (!user.hashedPassword) {
      return {
        message:
          "Oops! It looks like you're trying to log in with an incorrect method. Please use the original method you used when you signed up to access your account.",
        type: 'password',
      };
    }

    const isVerified = await verifyPassword(
      user?.hashedPassword!,
      parsedForm.password,
    );

    if (!isVerified) {
      return { message: 'Invalid email/password', type: 'all' };
    }

    return { message: null, formData: parsedForm, type: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      for (let err of error.issues) {
        if (err.path[0] === 'email') {
          return { message: err.message, type: err.path[0] };
        }

        if (err.path[1] === 'password') {
          return { message: err.message, type: err.path[1] };
        }
      }
    }
  }
}
