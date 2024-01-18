import * as z from "zod";


// Define a regular expression pattern for a valid name
const nameRegex = /^[A-Za-z\s'-]+$/; // Allows letters, spaces, hyphens, and single quotes

export const RegistrationSchema = z.object({
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


export const SignInSchema = z.object({
  email: z.string().email('Email is required'),
  password: z.string({ required_error: 'You must enter a valid password' }),
});
