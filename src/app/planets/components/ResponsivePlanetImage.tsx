'use client';

import { useWindowSize } from '@uidotdev/usehooks';
import Image from 'next/image';

interface ResponsivePlanetImageProps {
  source: string;
  alt: string;
}

export function ResponsivePlanetImage({
  source,
  alt,
}: ResponsivePlanetImageProps) {
  const { width } = useWindowSize();
  const isMobile = width ? width < 768 : false;

  return (
    <Image
      className="mx-auto mb-12"
      src={source}
      alt={alt}
      width={isMobile ? 320 : 460}
      height={isMobile ? 300 : 380}
    />
  );
}
