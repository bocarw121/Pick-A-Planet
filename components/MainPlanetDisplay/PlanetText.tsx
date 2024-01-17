interface PlanetTextProps {
  planet: string;
}

export function PlanetText({ planet }: PlanetTextProps) {
  return <h2 className="text-center text-2xl font-bold">{planet}</h2>;
}
