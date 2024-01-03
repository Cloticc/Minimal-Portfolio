// import React from "react";

// function Information() {
//   return (
//     <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
//       <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-mono tracking-tight">
//         Andreas Isidorsson
//       </h1>

//       <img
//         src="https://rainnerlins.com/public/images/editor.png"
//         alt="Andreas Isidorsson"
//         className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mt-4 border-4 border-cyan-600 dark:border-cyan-600"
//       />
//       <p className="text-base md:text-xl mb-3 font-mono">
//         A developer that enjoy coding and gaming.
//       </p>
//       <p className="text-sm max-w-xl mb-6 font-mono tracking-tight">
//       I'm a self-taught developer deeply enthusiastic about technology and gaming. Over the past three years, I've honed my coding skills, gaining experience across a diverse spectrum of technologies and programming languages. @
//         <a
//           href="https://github.com/Cloticc"
//           target="_blank"
//           className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-blue-600"
//           rel="noreferrer noopener"
//         >
//           Clotic
//         </a>{" "}
//       </p>
//     </div>
//   );
// }

// export default Information;

import React from "react";

function Information() {
  return (
    <div className="flex items-center justify-start flex-col text-center pt-20 pb-10 relative">
      <img
        // src="https://rainnerlins.com/public/images/editor.png"
        src="https://www.thoughtco.com/thmb/zu1-mSqTg1AlDHnYudXmIHKpgp4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pexels-photo-270348-598f140868e1a20011c6ec6b.jpg"
        alt="Andreas Isidorsson"
        className="animate-fade-down w-full h-36 md:w-full md:h-60 object-cover mt-4 border-4 border-cyan-600 dark:border-cyan-600 absolute z-10 filter blur-sm"
      />
      <h1 className="animate-fade-down text-4xl md:text-7xl text-gray-200 dark:text-gray-200 mb-1 md:mb-5 font-Raleway tracking-tight z-20 relative top-6 ">
        Andreas Isidorsson
      </h1>
      <p className="animate-fade-down text-1xl md:text-2xl mb-3 text-gray-200 dark:text-gray-200 font-Raleway z-20 relative top-3 md:top-1">
        A developer that enjoy coding and gaming.
      </p>
      <p className="animate-fade-down max-w-xl mb-4 text-sm md:text-xl text-gray-200 dark:text-gray-200 font-Raleway tracking-tight z-20 relative top-3 md:top-1">
        A self-taught developer with a passion for technology and gaming, I've
        spent the past years honing my coding skills across a wide range of
        technologies and programming languages.
      </p>
    </div>
  );
}
export default Information;
