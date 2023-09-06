'use client';

import React, { ReactNode, useEffect } from 'react';

import { ParticleHeader } from '../ParticleHeader';
import { NavBar } from '../NavBar';
import { AuthProvider } from "'@/context/AuthContext'";
import { Footer } from '../Footer';

interface AppWrapperProps {
  children: ReactNode;
}

// This is a wrapper to avoid errors in layouts due to hooks in client components
export function AppWrapper({ children }: AppWrapperProps) {
  return (
    <AuthProvider>
      <ParticleHeader />
      <NavBar />
      {children}
      <Footer />
    </AuthProvider>
  );
}
