import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';

// import { useState } from 'react';

function Navbar( { isDarkMode, setIsDarkMode } ) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={isDarkMode ? "bg-primary" : "bg-primary"}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button*/}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>

          </div>
          {/* Links for large screens */}
          <div className="hidden sm:block sm:ml-auto sm:mr-auto">
            <div className="flex space-x-4">
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/Minimal-Portfolio/">Home</Link>
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/Minimal-Portfolio/projects">Projects</Link>
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/Minimal-Portfolio/Shop">Shop</Link>
              <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/Minimal-Portfolio/contact">Contact</Link>
            </div>
          </div>
          {/* Dark mode button */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button onClick={() => setIsDarkMode(!isDarkMode)}  ></button>
       <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        {isDarkMode ? (
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* SVG path for light mode icon */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* SVG path for dark mode icon */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12A9 9 0 1021 12a9 9 0 00-9-9z" />
          </svg>
        )}
      </button>
    </div>

        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/Minimal-Portfolio/">Home</Link>
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/Minimal-Portfolio/projects">Projects</Link>
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/Minimal-Portfolio/Shop">Shop</Link>
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/Minimal-Portfolio/contact">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export  default Navbar; 
 


// // import React from "react";

// import { Link, Route } from "react-router-dom";
// import React, { useEffect, useState } from "react";

// function Navbar() {
//   const [theme, setTheme] = useState(null);

//   useEffect(() => {
//     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//     //   setTheme("light");
//     // } else {
//     //   setTheme("dark");
//     // }
//   }, []);

//   const handleThemeSwitch = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [theme]);

//   const sun = (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className="w-6 h-6"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//       />
//     </svg>
//   );

//   const moon = (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="white"
//       className="w-6 h-6"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
//       />
//     </svg>
//   );
//   return (
//     <>
//       <div className="flex flex-wrap sticky top-0 z-50 ">
//         <section className="relative mx-auto">
//           <nav className="flex justify-between bg-gray-900 text-white w-screen">
//             <div className="px-5 xl:px-12 py-6 flex w-full items-center">
//               <a className="text-3xl font-bold font-heading" href="/">
//                 <img
//                   className="h-10"
//                   src="https://icons.veryicon.com/png/Application/Enkel/Terminal.png"
//                   alt=""
//                   href="/"
//                 />
//               </a>

//               <ul className="flex px-4 mx-auto font-semibold text-lg font-heading ">
//                 <li>
//                   <Link className="hover:text-gray-200 hover:underline px-4 py-2" to="/Minimal-Portfolio/">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="hover:text-gray-200 hover:underline px-4 py-2" to="/Minimal-Portfolio/about">
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="hover:text-gray-200 hover:underline px-4 py-2" to="/Minimal-Portfolio/projects">
//                     Projects
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="hover:text-gray-200 hover:underline px-4 py-2" to="/Minimal-Portfolio/contact">
//                     Contact
//                   </Link>
//                 </li>
                
//               </ul>

//               {/* <div className=" xl:flex items-center space-x-5">
//                 <div className="flex md:flex-wrap items-center justify-center md:justify-end space-x-4 md:space-x-8 md:mx-4 ">
//                   <div className="flex items-center hover:text-gray-200">
//                     <button
//                       type="button"
//                       onClick={handleThemeSwitch}
//                       className="flex items-center justify-center w-10 h-10 p-2 bg-gray-900 rounded-full focus:outline-none"
//                     >
//                       {theme === "dark" ? sun : moon}
//                     </button>
//                   </div>
//                 </div>
//               </div> */}
//             </div>
//           </nav>
//         </section>
//       </div>
//     </>
//   );
// }

// export default Navbar;
