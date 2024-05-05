import React, { useState } from 'react';
import { signOut ,useSession } from 'next-auth/react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
  {session ? ( // If user is logged in
    <div className="hidden sm:flex">
      <a
        onClick={(e) => {
          e.preventDefault();
          signOut();
        }}
        className="rounded-md bg-gradient-to-r px-5 py-2.5 text-sm font-medium from-orange-700 via-red-700 to-red-900 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
        href="/api/auth/signout"
      >
        LOGOUT
      </a>
    </div>
  ) : ( // If user is not logged in
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
