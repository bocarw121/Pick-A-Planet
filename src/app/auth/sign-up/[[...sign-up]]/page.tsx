import { SignUp as ClerkSignUp } from '@clerk/nextjs';

import { AuthWrapper } from "'@/components/AuthWrapper'";

export default function SignUp() {
  return (
    <AuthWrapper>
      <ClerkSignUp />
    </AuthWrapper>
  );
}
