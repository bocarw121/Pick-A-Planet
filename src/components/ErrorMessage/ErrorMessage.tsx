import { FormError } from "'@/types'";

interface ErrorMessageProps {
  error: FormError;
  typeToHandle: string;
}

export function ErrorMessage({ error, typeToHandle }: ErrorMessageProps) {
  return (
    error.type === typeToHandle && (
      <span className="form-label-alt text-error">{error.message}</span>
    )
  );
}
