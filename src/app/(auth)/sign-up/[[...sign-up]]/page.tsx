import { SignUp as ClerkSignUp } from '@clerk/nextjs';

import { AuthWrapper } from "'@/components/AuthWrapper'";

export default function SignUp({
  searchParams,
}: {
  searchParams: { redirectUrl: string };
}) {
  const { redirectUrl } = searchParams;
  return (
    <AuthWrapper>
      <ClerkSignUp redirectUrl={redirectUrl || '/profile'} />
    </AuthWrapper>
  );
}
