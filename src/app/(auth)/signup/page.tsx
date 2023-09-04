'use client';

import Link from 'next/link';
import { createAction } from '../actions';

import { ErrorMessage } from "'@/components/ErrorMessage'";
import { useFormErrorStore } from "'@/lib/store'";
import { ControlledInput } from "'@/components/ControlledInput'";
import { SocialSignOn } from "'@/components/SocialSignOn'";

export default function SignInPage() {
  const { setError, error, handleErrorChange } = useFormErrorStore(
    (state) => state,
  );

  async function onSignUp(formData: FormData) {
    const res = await createAction(formData);
    if (res && res.message && res.type) {
      setError(res);
    }
  }

  return (
    <form
      action={onSignUp}
      className="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary p-4 sm:p-20 mt-20 "
    >
      {/* <p>Social </p> */}
      <SocialSignOn />

      <div className="divider my-6 text-xs text-content2">or sign in with</div>

      <div className="form-group">
        <div className="form-field">
          <label className="form-label">Email address</label>

          <ControlledInput
            placeHolder="name@awesomeemail.com"
            type="email"
            name="email"
            onChange={() => handleErrorChange('email')}
          />

          <ErrorMessage error={error} typeToHandle="email" />
        </div>
        <div className="form-field">
          <label className="form-label">
            <span>Password</span>
          </label>
          <div className="form-control">
            <ControlledInput
              placeHolder="super secret"
              type="password"
              name="password"
              onChange={() => handleErrorChange('passwords')}
            />
          </div>

          <ErrorMessage error={error} typeToHandle="password" />
        </div>

        <div className="form-field">
          <label className="form-label">
            <span>Confirm Password</span>
          </label>
          <div className="form-control">
            <ControlledInput
              placeHolder="confirm super secret"
              type="password"
              name="confirmPassword"
              onChange={() => handleErrorChange('passwords')}
            />
          </div>
          <ErrorMessage error={error} typeToHandle="confirmPassword" />
        </div>

        <div className="form-field pt-5">
          <div className="form-control justify-between">
            <button type="submit" className="btn btn-primary w-full">
              Sign Up
            </button>
          </div>
        </div>

        <div className="form-field">
          <div className="form-control">
            <Link
              href="/signup"
              className="link link-underline-hover link-secondary text-sm"
            >
              Already have an account? Sign In
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
