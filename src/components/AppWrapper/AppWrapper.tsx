'use client';

import React, { ReactNode } from 'react';
import { ParticleHeader } from '../ParticleHeader';
import { NavBar } from '../NavBar';

interface AppWrapperProps {}

// This is a wrapper to avoid errors in layouts due to hooks in client components
export function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <ParticleHeader />
      <NavBar />
      {children}
    </>
  );
}
