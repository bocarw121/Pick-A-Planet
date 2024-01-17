import { signOut } from 'next-auth/react';
interface SignOutProps {
  isMobile?: boolean;
}

export function SignOut({ isMobile }: SignOutProps) {
  const desktopStyle =
    'navbar-item md:text-lg  lg:text-xl  xl:text-2xl text-white hover:text-secondary navbar-item__color';
  return (
    <button
      className={
        isMobile ? 'dropdown-item text-sm navbar-item__color' : desktopStyle
      }
      onClick={() => {
        signOut({
          callbackUrl: `${window.location.origin}`,
        });
      }}
    >
      Sign Out
    </button>
  );
}
