interface PlanetTitleProps {
  planet: string;
}

export function PlanetMainTitle({ planet }: PlanetTitleProps) {
  return (
    <h1 className="mt-16 mb-8 text-cream text-center text-planet-title">
      {planet}
    </h1>
  );
}
