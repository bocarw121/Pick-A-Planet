import Link from 'next/link';
import React, { ReactNode } from 'react';

interface CustomLinkProps {
  children: ReactNode;
  path: string;
  auth?: boolean;
}

export function CustomLink({ children, path, auth }: CustomLinkProps) {
  return (
    <Link
      href={path}
      className={`navbar-item text-2xl ${
        !auth && 'px-20'
      } text-white hover:text-secondary navbar-item__color`}
    >
      {children}
    </Link>
  );
}
