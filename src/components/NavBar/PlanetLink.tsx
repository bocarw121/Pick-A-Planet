import Link from 'next/link';
import React, { ReactNode } from 'react';

interface PlanetLinkProps {
  children: ReactNode;
  path: string;
}

export function PlanetLink({ path, children }: PlanetLinkProps) {
  return (
    <Link
      href={path}
      tabIndex={-1}
      className="dropdown-item text-center text-md hover:scale-150 dropdown-item__bg_none ease-in-out duration-300 hover:text-secondary"
    >
      {children}
    </Link>
  );
}
