import React from 'react';
import { PlanetLink } from './PlanetLink';

interface PlaneDropdownProps {}

export function PlanetDropdown({}: PlaneDropdownProps) {
  return (
    <div className="dropdown-container ">
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
        <div className="dropdown-menu dropdown-menu-bottom-center bg-primary">
          <PlanetLink path="/planets/mercury">Mercury</PlanetLink>
          <PlanetLink path="/planets/venus">Venus</PlanetLink>
          <PlanetLink path="/planets/earth">Earth</PlanetLink>
          <PlanetLink path="/planets/mars">Mars</PlanetLink>
          <PlanetLink path="/planets/jupiter">Jupiter</PlanetLink>
          <PlanetLink path="/planets/saturn">Saturn</PlanetLink>
          <PlanetLink path="/planets/uranus">Uranus</PlanetLink>
          <PlanetLink path="/planets/neptune">Neptune</PlanetLink>
        </div>
      </div>
    </div>
  );
}
