'use client';

import { getUserByClerkId } from "'@/lib/auth'";
import { storage } from "'@/utils/storage'";
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
  const [user, setUser] = useState<User | null>(() => {
    const user = storage.getUser();

    if (!user) return null;

    return JSON.parse(user);
  });
  const { user: clerkUser } = useUser();

  // Function to log in a user

  useEffect(() => {
    if (clerkUser) {
      getUser();
    } else {
      localStorage.removeItem('currentUser');
    }
    console.log(clerkUser?.createdAt);
    console.log(clerkUser?.lastSignInAt);
    if (clerkUser?.lastSignInAt && clerkUser?.createdAt) {
      console.log(clerkUser?.lastSignInAt === clerkUser?.createdAt);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clerkUser]);

  useEffect(() => {
    console.log(clerkUser);
  }, [clerkUser]);

  async function getUser() {
    try {
      console.log(clerkUser);
      if (!clerkUser?.id) return;
      console.log(clerkUser.id);
      const res = await fetch('/me', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ userId: clerkUser.id }),
      });

      const { user, message } = await res.json();

      if (message === 'No User found') {
        createUser();
      }

      setUser(user);

      storage.setUser(user);
    } catch (error) {
      console.error(error);
    }
  }

  async function createUser() {
    try {
      if (!clerkUser?.id) return;
      console.log(clerkUser.id);
      const res = await fetch('/create', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ user: clerkUser }),
      });

      const { user, message } = await res.json();

      storage.setUser(user);

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
