import { FormError } from "'@/types'";

interface ErrorMessageProps {
  error: FormError;
  typeToHandle: 'email' | 'password' | 'confirmPassword' | 'all';
}

export function ErrorMessage({ error, typeToHandle }: ErrorMessageProps) {
  return (
    error[typeToHandle]?.type === typeToHandle && (
      <span className="form-label-alt text-error">
        {error[typeToHandle].message}
      </span>
    )
  );
}
