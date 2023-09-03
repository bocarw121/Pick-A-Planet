'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

// AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
