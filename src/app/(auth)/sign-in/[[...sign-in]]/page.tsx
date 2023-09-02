import { AuthWrapper } from "'@/components/AuthWrapper'";
import { SignIn as ClerkSignIn } from '@clerk/nextjs';

export default function SignIn({
  searchParams,
}: {
  searchParams: { redirectUrl: string };
}) {
  const { redirectUrl } = searchParams;
  return (
    <AuthWrapper>
      <ClerkSignIn redirectUrl={redirectUrl || '/profile'} />
    </AuthWrapper>
  );
}
