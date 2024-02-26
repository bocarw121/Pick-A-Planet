import { roboto } from '@/lib/fonts';

interface PlanetSectionProps {
  title: string;
}

export function PlanetSectionTitle({ title }: PlanetSectionProps) {
  return (
    <h1
      className={`mb-5 text-center text-cream text-planet-section-title ${roboto.className} `}
    >
      {title}
    </h1>
  );
}
