import { AuthWrapper } from "'@/components/AuthWrapper'";
import { SignIn as ClerkSignIn } from '@clerk/nextjs';

export default function SignIn() {
  return (
    <AuthWrapper>
      <ClerkSignIn />
    </AuthWrapper>
  );
}
