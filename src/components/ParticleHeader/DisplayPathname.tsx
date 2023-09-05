import { usePathname } from 'next/navigation';
import { Lato } from 'next/font/google';
import { useUserStore } from "'@/lib/store'";
import { getFirstName } from "'@/utils/getFirstName'";
import { useSession } from 'next-auth/react';

interface DisplayPathnameProps {}

const lato = Lato({
  weight: ['100', '400', '900'],
  subsets: ['latin'],
});

export function DisplayPathname({}: DisplayPathnameProps) {
  const pathName = usePathname();
  const { data: session } = useSession();
  const firsName = getFirstName(session?.user?.name);

  function getNameToDisplay() {
    switch (pathName) {
      case '/planets/mercury':
        return 'Mercury';
      case '/planets/venus':
        return 'Venus';
      case '/planets/earth':
        return 'Earth';
      case '/planets/mars':
        return 'Mars';
      case '/planets/jupiter':
        return 'Jupiter';
      case '/planets/saturn':
        return 'Saturn';
      case '/planets/uranus':
        return 'Uranus';
      case '/planets/neptune':
        return 'Neptune';
      default:
        return null;
    }
  }

  const planetName = getNameToDisplay();

  return (
    <div className="absolute mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      {planetName && (
        <span
          className={`text-5xl font-bold text-center  text-white ${lato.className} font-bold`}
        >
          Welcome to {planetName}, {session?.user?.name && firsName}!
        </span>
      )}
    </div>
  );
}
