import Image from 'next/image';

interface PlanetImageProps {
  source: string;
  planet: string;
}

export function PlanetImage({ source, planet }: PlanetImageProps) {
  return (
    <Image
      className="opacity-70  transition-all ease-in-out duration-1000 hover:opacity-100 hover:scale-125"
      src={source}
      alt={`Image of ${planet}`}
      width={230}
      height={72}
    />
  );
}
