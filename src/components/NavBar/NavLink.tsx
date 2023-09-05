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
      className={`navbar-item md:text-lg  lg:text-xl  xl:text-2xl ${
        !auth && 'px-20'
      } text-white hover:text-secondary navbar-item__color ease-in`}
    >
      {children}
    </Link>
  );
}
