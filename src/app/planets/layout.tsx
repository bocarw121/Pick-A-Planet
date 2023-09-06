import { ReactNode } from 'react';

export default function PlanetLayout({ children }: { children: ReactNode }) {
  return (
    <main className="grid grid-cols-4fr-1fr  max-lg:grid-cols-1fr max-lg:mx-auto w-full h-full planet-content bg-gradient-planet">
      {children}
    </main>
  );
}
