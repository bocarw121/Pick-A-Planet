import React, { ReactNode } from 'react';

interface PlaneDropdownProps {
  children: ReactNode;
}

export function PlanetDropdown({ children }: PlaneDropdownProps) {
  return (
    <div className="dropdown-menu dropdown-menu-bottom-center bg-primary">
      {children}
    </div>
  );
}
