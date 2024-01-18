import { getUserByEmail } from '@/data/user';
import { encryptPassword } from '@/lib/bcrypt';
import { db } from '@/lib/db';
import { RegistrationSchema } from '@/schemas';
import { redirect } from 'next/navigation';
import * as z from 'zod';

/**
 * Server action for handling user creation
 * @param formData
 * @returns
 */
export async function register(values: z.infer<typeof RegistrationSchema>) {
  const validatedFields = RegistrationSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { email, name, passwords } = validatedFields.data;

  try {
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return {
        error: `${email} has already been registered, please login using your credentials`,
      };
    }

    const firstLetterInEmail = email.split('')[0];

    const image = `https://s.gravatar.com/avatar/5edc045bafe13bf1ce09c68b90b5ee9f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F${firstLetterInEmail}.png`;

    const hashedPassword = await encryptPassword(passwords.password);

    await db.user.create({
      data: {
        email,
        name,
        image,
        password: hashedPassword,
      },
    });

    // handle token and email sending here

    return { success: 'Account created successfully' };
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
