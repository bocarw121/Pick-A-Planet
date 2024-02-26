import { useActiveRoute } from '@/hooks/useActiveRoute';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

interface CustomLinkProps {
  children: ReactNode;
  path: string;
  auth?: boolean;
}

export function CustomLink({ children, path, auth }: CustomLinkProps) {
  const activeClass = useActiveRoute(path);

  return (
    <Link
      href={path}
      className={`navbar-item md:text-lg  lg:text-xl  xl:text-2xl ${
        !auth && 'px-20'
      } ${activeClass} hover:text-secondary navbar-item__color ease-in `}
    >
      {children}
    </Link>
  );
}
