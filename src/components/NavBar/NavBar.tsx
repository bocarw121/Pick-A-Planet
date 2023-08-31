import React from 'react';

import { CustomLink } from './NavLink';

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
            <div className="dropdown-menu dropdown-menu-bottom-center bg-primary">
              <a
                tabIndex={-1}
                href="/mercury"
                className="dropdown-item text-center text-md hover:scale-150 dropdown-item__bg_none ease-in-out duration-300 hover:text-secondary"
              >
                Mercury
              </a>
              <a
                tabIndex={-1}
                href="/venus"
                className="dropdown-item text-center text-md hover:scale-150 dropdown-item__bg_none ease-in-out duration-300 hover:text-secondary"
              >
                Venus
              </a>
              <a
                tabIndex={-1}
                href="/earth"
                className="dropdown-item text-center text-md hover:scale-150 dropdown-item__bg_none ease-in-out duration-300 hover:text-secondary"
              >
                Earth
              </a>
              <a
                tabIndex={-1}
                href="/mars"
                className="dropdown-item text-center text-md hover:scale-150 dropdown-item__bg_none ease-in-out duration-300 hover:text-secondary"
              >
                Mars
              </a>
              <a
                tabIndex={-1}
                className="dropdown-item text-center text-md hover:scale-150 dropdown-item__bg_none ease-in-out duration-300 hover:text-secondary"
              >
                Jupiter
              </a>
              <a
                tabIndex={-1}
                className="dropdown-item text-center hover:scale-150 text-md dropdown-item__bg_none ease-in-out duration-300 hover:text-secondary"
              >
                Saturn
              </a>
              <a
                tabIndex={-1}
                href="/mars"
                className="dropdown-item text-center text-md hover:scale-150 dropdown-item__bg_none ease-in-out duration-300 hover:text-secondary"
              >
                Uranus
              </a>
              <a
                tabIndex={-1}
                className="dropdown-item text-center text-md hover:scale-150 dropdown-item__bg_none ease-in-out duration-300 hover:text-secondary"
              >
                Neptune
              </a>
              <a
                tabIndex={-1}
                className="dropdown-item text-center  hover:scale-150  text-md dropdown-item__bg_none ease-in-out duration-300 hover:text-secondary"
              >
                Pluto
              </a>
            </div>
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
            <CustomLink auth path="/">
              Logout
            </CustomLink>
          </>
        ) : (
          <>
            <CustomLink auth path="/">
              Sign In
            </CustomLink>
            <CustomLink auth path="/">
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
