import React from 'react';

import { CustomLink } from './NavLink';
import { PlanetLink } from './PlanetLink';
import { PlanetDropdown } from './PlanetDropdown';

interface NavBarProps {}

export function NavBar({}: NavBarProps) {
  const user = false;
  return (
    <nav className="flex w-full p-4  bg-primary">
      <div className="navbar-start">
        <h1>Logo</h1>
      </div>

      <div className="navbar-center">
        <CustomLink path="/">Home</CustomLink>
        <div className="dropdown-container">
          <div className="dropdown">
            <label
              className="btn btn-ghost hover:bg-primary flex cursor-pointer px-0 text-2xl  text-white"
              tabIndex={0}
            >
              Planets
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </label>
            <PlanetDropdown>
              <PlanetLink path="/planets/mercury">Mercury</PlanetLink>
              <PlanetLink path="/planets/venus">Venus</PlanetLink>
              <PlanetLink path="/planets/earth">Earth</PlanetLink>
              <PlanetLink path="/planets/mars">Mars</PlanetLink>
              <PlanetLink path="/planets/jupiter">Jupiter</PlanetLink>
              <PlanetLink path="/planets/saturn">Saturn</PlanetLink>
              <PlanetLink path="/planets/uranus">Uranus</PlanetLink>
              <PlanetLink path="/planets/neptune">Neptune</PlanetLink>
            </PlanetDropdown>
          </div>
        </div>
        <CustomLink path="/contact">Contact</CustomLink>
      </div>
      <div className="navbar-end ">
        {user ? (
          <CustomLink auth path="/profile">
            Profile
          </CustomLink>
        ) : (
          <>
            <CustomLink auth path="/sign-in">
              Sign In
            </CustomLink>
            <CustomLink auth path="/sign-up">
              Sign Up
            </CustomLink>
          </>
        )}
      </div>
    </nav>
  );
}
