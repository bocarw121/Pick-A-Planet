'use client';

import { storage } from "'@/utils/storage'";
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
  // user: User | null;
  // setUser: React.Dispatch<React.SetStateAction<User | null>>;
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
  const values = {};

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
