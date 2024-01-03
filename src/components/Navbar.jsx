// import React from "react";

import { Link, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    //   setTheme("light");
    // } else {
    //   setTheme("dark");
    // }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );
  return (
    <>
      <div className="flex flex-wrap sticky top-0 z-50 ">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="/">
                <img
                  className="h-10"
                  src="https://icons.veryicon.com/png/Application/Enkel/Terminal.png"
                  alt=""
                  href="/"
                />
              </a>

              <ul className="flex px-4 mx-auto font-semibold text-lg font-heading ">
                <li>
                  <Link className="hover:text-gray-200 hover:underline px-4 py-2" to="/Minimal-Portfolio/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200 hover:underline px-4 py-2" to="/Minimal-Portfolio/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200 hover:underline px-4 py-2" to="/Minimal-Portfolio/projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200 hover:underline px-4 py-2" to="/Minimal-Portfolio/contact">
                    Contact
                  </Link>
                </li>
                
              </ul>

              <div className=" xl:flex items-center space-x-5">
                {/* Download */}

                <div className="flex md:flex-wrap items-center justify-center md:justify-end space-x-4 md:space-x-8 md:mx-4 ">
                  <a
                    href="https://drive.google.com/file/d/1CFkPA_yFW8YpGWeL4WSwDFcEKtB1iKV0/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-gray-900 border border-transparent rounded-lg active:bg-gray-800 hover:bg-gray-800 focus:outline-none focus:shadow-outline-gray"
                  >
                    <svg
                      id="arrow"
                      className="w-6 h-6 mr-2 transition-all group-hover:-translate-y-1 "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      ></path>
                    </svg>
                    {/* Download */}
                  </a>
                  <div className="flex items-center hover:text-gray-200">
                    <button
                      type="button"
                      onClick={handleThemeSwitch}
                      className="flex items-center justify-center w-10 h-10 p-2 bg-gray-900 rounded-full focus:outline-none"
                    >
                      {theme === "dark" ? sun : moon}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
}

export default Navbar;
