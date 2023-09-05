import Link from 'next/link';
import React, { ReactNode } from 'react';

interface CustomMobileLinkProps {
  children: ReactNode;
  path: string;
}

export function MobileNavLink({ children, path }: CustomMobileLinkProps) {
  return (
    <Link
      href={path}
      tabIndex={-1}
      className="dropdown-item text-sm navbar-item__color"
    >
      {children}
    </Link>
  );
}
