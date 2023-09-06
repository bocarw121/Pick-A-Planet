interface PlanetSectionProps {
  title: string;
}

export function PlanetSectionTitle({ title }: PlanetSectionProps) {
  return (
    <h1 className="mt-16 mb-8 text-cream text-center text-planet-title">
      {title}
    </h1>
  );
}
