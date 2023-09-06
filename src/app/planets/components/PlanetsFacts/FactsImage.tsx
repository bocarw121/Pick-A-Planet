'use client';

import Image from 'next/image';

interface PlanetsFactsImageProps {
  source: string;
  planet: string;
}

export function PlanetsFactsImage({ planet, source }: PlanetsFactsImageProps) {
  return (
    <Image
      className="animate-motion"
      src={source}
      alt={`${planet} image`}
      width={300}
      height={322}
    />
  );
}
