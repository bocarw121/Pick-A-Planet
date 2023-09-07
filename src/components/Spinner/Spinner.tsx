interface SpinnerProps {
  size: string;
}

export function Spinner({ size }: SpinnerProps) {
  return (
    <div
      className={`animate-spin rounded-full h-${size} w-${size} border-t-2 border-b-2 border-white`}
    ></div>
  );
}
