import React, { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { data: session, status } = useSession();

  return (
    <header className="bg-black dark:bg-primary relative">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a href="/">
              <img src="/logo1.png" alt="logo" width={70} height={70} />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/Header/workout"
                  >
                    Workout
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/Header/routine"
                  >
                    Routine
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/Header/tools"
                  >
                    Tools
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/Header/Pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/Header/Team"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16m-7 6h7'
                  }
                />
              </svg>
            </button>
            {session ? (
              <div className="relative">
                <button
                  className="flex items-center text-gray-600 focus:outline-none"
                  onClick={toggleDropdown}
                >
                  <img
                    src="peo.svg"
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="ml-2">{session.user.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    )}
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute mt-2 right-0 left-auto w-full sm:w-48 bg-black rounded-md shadow-lg py-1">
                    <a
                      href="/profile"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                    >
                      Profile
                    </a>
                    <a
                      href="/settings"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-100"
                    >
                      Settings
                    </a>
                    <hr className="border-gray-200 my-1" />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        signOut();
                      }}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-100 w-full text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-gradient-to-r from-red-900 via-red-700 to-orange-700 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                  href="/login"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gradient-to-r px-5 py-2.5 text-sm font-medium from-orange-700 via-red-700 to-red-900 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                    href="/register"
                  >
                    Register
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Menu items for mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav aria-label="Global" className="mt-2">
              <ul className="flex flex-col items-center gap-4 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/Header/workout"
                  >
                    Workout
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/Header/routine"
                  >
                    Routine
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/Header/tools"
                  >
                    Tools
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/Header/Pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/Header/Team"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
