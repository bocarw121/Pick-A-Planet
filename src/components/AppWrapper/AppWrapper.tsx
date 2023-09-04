'use client';

import React, { ReactNode, useEffect } from 'react';

import { ParticleHeader } from '../ParticleHeader';
import { NavBar } from '../NavBar';
import { AuthProvider } from "'@/context/AuthContext'";
import { useUserStore } from "'@/lib/store'";
import { User } from "'@/types'";

interface AppWrapperProps {
  children: ReactNode;
  user: User;
}

// This is a wrapper to avoid errors in layouts due to hooks in client components
export function AppWrapper({ children, user }: AppWrapperProps) {
  const { setUser } = useUserStore();

  useEffect(() => {
    setUser(user);
  }, [user, setUser]);

  return (
    <AuthProvider>
      <ParticleHeader />
      <NavBar />
      {children}
    </AuthProvider>
  );
}
