import React from 'react';

import { CustomLink } from './NavLink';
import { PlanetLink } from './PlanetLink';
import { PlanetDropdown } from './PlanetDropdown';
import { signOut, useSession } from 'next-auth/react';
import { NavbarMobile } from './NavbarMobile';
import { SignOut } from '../SignOut';

interface NavBarProps {}

export function NavBar() {
  const { data: session, status } = useSession();

  return (
    <>
      <nav className="flex w-full p-4  bg-primary max-lg:hidden min-w-sm">
        <div className="navbar-start">
          <h1>Pick A Planet</h1>
        </div>

        <div className="navbar-center ">
          <CustomLink path="/">Home</CustomLink>
          <PlanetDropdown />
          <CustomLink path="/contact">Contact</CustomLink>
        </div>
        <div className="navbar-end max-lg:hidden">
          {session?.user ? (
            <>
              <CustomLink auth path="/profile">
                Profile
              </CustomLink>
              <SignOut />
            </>
          ) : (
            <>
              {status !== 'loading' && (
                <>
                  <CustomLink auth path="/signin">
                    Sign In
                  </CustomLink>
                  <CustomLink auth path="/signup">
                    Sign Up
                  </CustomLink>
                </>
              )}
            </>
          )}
        </div>
      </nav>
      <NavbarMobile />
    </>
  );
}
