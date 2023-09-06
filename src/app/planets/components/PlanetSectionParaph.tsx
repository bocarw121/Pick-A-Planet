import { lato, roboto } from "'@/lib/fonts'";
import { ReactNode } from 'react';

interface PlanetSectionParagraphProps {
  children: ReactNode;
}

export function PlanetSectionParagraph({
  children,
}: PlanetSectionParagraphProps) {
  return (
    <p
      className={`text-white w-planet-paragraph text-planet-paragraph ${lato.className} mb-14 mx-auto`}
    >
      {children}
    </p>
  );
}
