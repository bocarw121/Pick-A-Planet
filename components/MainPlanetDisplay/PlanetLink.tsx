import Link from 'next/link';

interface PlanetLinkProps {
  path: string;
}

export function PlanetLink({ path }: PlanetLinkProps) {
  return (
    <Link
      className="text-2xl text-black bg-white hover:bg-secondary transition-all ease-in-out duration-1000 hover:text-white rounded-xl p-2"
      href={`/planets/${path}`}
    >
      Discover
    </Link>
  );
}
