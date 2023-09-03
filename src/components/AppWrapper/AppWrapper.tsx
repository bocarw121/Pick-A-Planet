'use client';

import React, { ReactNode } from 'react';
import { ParticleHeader } from '../ParticleHeader';
import { NavBar } from '../NavBar';

interface AppWrapperProps {
  children: ReactNode;
  user: any;
}

// This is a wrapper to avoid errors in layouts due to hooks in client components
export function AppWrapper({ children, user }: AppWrapperProps) {
  return (
    <>
      <ParticleHeader />
      <NavBar user={user} />
      {children}
    </>
  );
}
