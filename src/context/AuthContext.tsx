'use client';

import { Session } from 'next-auth';
import { SessionProvider, getSession } from 'next-auth/react';
import React, { ReactNode, useEffect } from 'react';

// AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = React.useState<Session | null>(null);
  useEffect(() => {
    (async () => {
      const session = await getSession();
      console.log({ session });

      if (session) {
        setSession(session);
      }
    })();
  }, []);
  return <SessionProvider>{children}</SessionProvider>;
}
