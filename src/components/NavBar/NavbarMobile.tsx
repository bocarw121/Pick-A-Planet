'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { SignOut } from '../SignOut';
import { MobileNavLink } from './MobileNavlink';

interface NavbarMobileProps {}

export function NavbarMobile({}: NavbarMobileProps) {
  const { data: session } = useSession();

  return (
    <nav className="navbar flex w-full p-4 bg-primary lg:hidden min-w-sm">
      <div className="navbar-start">
        <a className="navbar-item">Pick A Planet</a>
      </div>
      <div className="navbar-end">
        <div>
          <div className="dropdown-container">
            <div className="dropdown">
              <label
                className="btn btn-ghost flex cursor-pointer px-0"
                tabIndex={0}
              >
                {session?.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt="avatar"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                ) : (
                  <>
                    <Image
                      src="/hamburger.svg"
                      alt="hamburger"
                      width={32}
                      height={32}
                    />
                  </>
                )}
              </label>

              <div className="dropdown-menu dropdown-menu-bottom-left">
                {session?.user ? (
                  <>
                    <MobileNavLink path="/profile">Profile</MobileNavLink>

                    <MobileNavLink path="/">Home</MobileNavLink>
                    <SignOut isMobile />
                  </>
                ) : (
                  <>
                    <MobileNavLink path="/">Home</MobileNavLink>
                    <MobileNavLink path="/signin">Sign In</MobileNavLink>
                    <MobileNavLink path="/signup">Sign Up</MobileNavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
