import { ReactNode } from 'react';

interface PlanetsFactsTextProps {
  children: ReactNode;
}

export function PlanetsFactsText({ children }: PlanetsFactsTextProps) {
  return <p className="text-lg text-white m-5 w-[95%]">{children}</p>;
}
