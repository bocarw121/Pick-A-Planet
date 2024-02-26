'use client';
import { SocialSignOn } from '@/components/SocialSignOn';
import { useFormErrorStore } from '@/lib/store';
import Link from 'next/link';
import { signInAction } from '../actions';
import { ErrorMessage } from '@/components/ErrorMessage';
import { ControlledInput } from '@/components/ControlledInput';
import { useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useIsAuthenticated } from '@/hooks/useIsAuthenticated';

export default function SignInPage() {
  const { setError, error, handleErrorChange, resetForm } = useFormErrorStore();
  const router = useRouter();
  useIsAuthenticated('/profile');

  async function onSignIn(formData: FormData) {
    const res = await signInAction(formData);

    if (res && res.message && res.type) {
      setError(res, res.type);
    }
    if (!res?.formData) {
      setError({ message: 'Invalid credentials', type: 'all' }, 'all');
      return;
    }

    const signInResponse = await signIn('credentials', {
      email: res.formData.email,
      password: res.formData.password,
      redirect: false,
    });

    if (!signInResponse || signInResponse?.ok !== true) {
      setError({ message: 'Invalid credentials', type: 'all' }, 'all');
      return;
    }

    router.push('/profile');
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <form
      action={onSignIn}
      className="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary p-4 sm:p-20 mt-20 "
    >
      <SocialSignOn />
      <div className="divider my-6 text-xs text-content2">or continue with</div>

      <div className="form-group">
        <div className="form-field">
          <label className="form-label">Email address</label>

          <ControlledInput
            placeHolder="name@awesomeemail.com"
            name="email"
            type="email"
            onChange={() => handleErrorChange('email')}
          />
        </div>
        <ErrorMessage error={error} typeToHandle="email" />
        <div className="form-field">
          <label className="form-label">
            <span>Password</span>
          </label>
          <div className="form-control">
            <ControlledInput
              placeHolder="Super secret"
              name="password"
              type="password"
              onChange={() => handleErrorChange('password')}
            />
          </div>
          <ErrorMessage error={error} typeToHandle="password" />
        </div>
        <div className="form-field">
          <div className="form-control justify-end">
            <label className="form-label">
              <a className="link link-underline-hover link-secondary text-sm">
                Forgot your password?
              </a>
            </label>
          </div>
        </div>
        <div className="form-field pt-5">
          <div className="form-control justify-between">
            <button
              type="submit"
              className="btn btn-primary hover:bg-secondary w-full"
            >
              Sign in
            </button>
          </div>

          {error.all?.type && <ErrorMessage error={error} typeToHandle="all" />}
        </div>

        <div className="form-field">
          <div className="form-control">
            <Link
              href="/signup"
              className="link link-underline-hover link-secondary text-sm"
            >
              Don't have an account? Sign Up
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
