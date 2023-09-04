'use server';
import { encryptPassword, verifyPassword } from "'@/lib/argon2'";
import { prisma } from "'@/lib/prisma'";
import z from 'zod';
import { redirect } from 'next/navigation';

const registrationSchema = z.object({
  email: z.string().email('Email is required'),
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
export async function createAction(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');

  if (!email || !password || !confirmPassword) {
    return { message: 'You must fill in all fields', type: null };
  }

  try {
    const parsedForm = registrationSchema.parse({
      email,
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
        type: null,
      };
    }

    const newUser = await prisma.user.create({
      data: {
        email: parsedForm.email,
        hashedPassword: await encryptPassword(parsedForm.passwords.password),
      },
    });

    redirect('/signin');
  } catch (error) {
    if (error instanceof z.ZodError) {
      for (let err of error.issues) {
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
    // return { message: error };
  }
}

const signInSchema = z.object({
  email: z.string().email('Email is required'),
  password: z.string(),
});

/**
 * Server action for signing in user
 * @param formData
 * @returns
 */
export async function signInAction(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (!email || !password) {
    return { message: 'You must fill in all fields' };
  }

  const parsedForm = signInSchema.parse({
    email,
    password,
  });

  const user = await prisma.user.findUnique({
    where: {
      email: parsedForm.email,
    },
  });

  const isVerified = await verifyPassword(
    user?.hashedPassword!,
    parsedForm.password,
  );

  if (!user || !isVerified) {
    return { message: 'Invalid email/password' };
  }

  return { message: null, formData: parsedForm };
}
