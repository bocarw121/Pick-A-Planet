import React from 'react';

import { CustomLink } from './NavLink';
import { PlanetLink } from './PlanetLink';
import { PlanetDropdown } from './PlanetDropdown';

interface NavBarProps {}

export function NavBar({}: NavBarProps) {
  const isUser = false;

  return (
    <nav className="navbar bg-primary">
      <div className="navbar-start">
        {/* <Link path="/" >
          Ripple UI
        </Link> */}
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
        <CustomLink path="/">Contact</CustomLink>
      </div>
      <div className="navbar-end ">
        {isUser ? (
          <>
            <CustomLink auth path="/">
              Profile
            </CustomLink>
            <CustomLink auth path="/auth/signout">
              Sign Out
            </CustomLink>
          </>
        ) : (
          <>
            <CustomLink auth path="/auth/signin">
              Sign In
            </CustomLink>
            <CustomLink auth path="/auth/signup">
              Sign Up
            </CustomLink>
          </>
        )}
      </div>
    </nav>
  );
}

{
  /* <nav>
  <ul class="nav-wrapper">
    <li class='main-nav-link center'>
      <Link   path='/'>
        Home
      </Link>
    </li>
    <li class='main-nav-link center'>
      <button >
        Planets
      </button>
      <ul class='nav-planet-list'>
        <li>
          <Link  path='/planets/mercury'>
            Mercury
          </Link>
        </li>
        <li>
          <Link  path='/planets/venus'>
            Venus
          </Link>
        </li>
        <li>
          <Link  path='/planets/earth'>
            Earth
          </Link>
        </li>
        <li>
          <Link  path='/planets/mars'>
            Mars
          </Link>
        </li>
        <li>
          <Link  path='/planets/jupiter'>
            Jupiter
          </Link>
        </li>
        <li>
          <Link  path='/planets/saturn'>
            Saturn
          </Link>
        </li>
        <li>
          <Link  path='/planets/uranus'>
            Uranus
          </Link>
        </li>
        <li>
          <Link  path='/planets/neptune'>
            Neptune
          </Link>
        </li>
        <li>
          <Link  path='/planets/pluto'>
            Pluto
          </Link>
        </li>
      </ul>
    </li>
    <li class='main-nav-link center'>
      <Link   path='/contact'>
        Contact
      </Link>
    </li>
    </ul>  
    <div class="login" >
    {{#if user}}
        <Link   path='/profile'>
          Profile
        </Link>
        <Link   path='/logout'>
          Logout
        </Link>
    {{else}}
        <Link  path='/register'>
          Register
        </Link>
        <Link  path='/login'>
          Login
        </Link>
      </div>
    {{/if}}
  
</nav> */
}
