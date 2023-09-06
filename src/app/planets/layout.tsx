import { ReactNode } from 'react';

export default function PlanetLayout({ children }: { children: ReactNode }) {
  return <main className="planet-content 1fr w-full h-full ">{children}</main>;
}
