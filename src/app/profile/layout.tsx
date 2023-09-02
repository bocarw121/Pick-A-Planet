'use client';
import { Spinner } from "'@/components/Spinner'";
import { ClerkLoaded, ClerkLoading, SignedIn } from '@clerk/nextjs';

export default function ProfileLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClerkLoading>
        <Spinner />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>{children}</SignedIn>
      </ClerkLoaded>
    </>
  );
}
