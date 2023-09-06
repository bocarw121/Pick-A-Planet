'use client';
import { useWindowDimensions } from "'@/hooks/useWindowsDimensions'";
import Image from 'next/image';

interface ResponsivePlanetImageProps {
  source: string;
  alt: string;
}

export function ResponsivePlanetImage({
  source,
  alt,
}: ResponsivePlanetImageProps) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <Image
      className="desktop-pics mx-auto mb-12"
      src={source}
      alt={alt}
      width={isMobile ? 320 : 460}
      height={isMobile ? 300 : 380}
    />
  );
}
