'use client';

import { getUserByClerkId } from "'@/lib/auth'";
import { useUser } from '@clerk/nextjs';
import type { User } from '@prisma/client';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

// Define the shape of your AuthContext
interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Create the initial context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to simplify using the AuthContext
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const { user: clerkUser } = useUser();

  // Function to log in a user

  useEffect(() => {
    async function getUser() {
      try {
        if (!clerkUser?.id) return;
        console.log(clerkUser.id);
        const res = await fetch('api/me', {
          method: 'post',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ userId: clerkUser.id }),
        });

        const { user, message } = await res.json();

        if (message === 'No User') {
          createUser();
        }

        setUser(user);

        console.log(user);
      } catch (error) {
        console.error(error);
      }
    }
    if (clerkUser) {
      getUser();
    }
  }, [clerkUser]);

  async function createUser() {
    try {
      if (!clerkUser?.id) return;
      console.log(clerkUser.id);
      const res = await fetch('api/create', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ user: clerkUser }),
      });

      const { user, message } = await res.json();

      setUser(user);

      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }

  const authContextValue: AuthContextType = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
