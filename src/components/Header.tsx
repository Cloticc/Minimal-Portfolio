import React from "react";

function Information() {
  return (

    <div className="flex items-center justify-start flex-col text-center pt-20 pb-10 relative">
      <img
        // src="https://rainnerlins.com/public/images/editor.png"
        src="https://www.thoughtco.com/thmb/zu1-mSqTg1AlDHnYudXmIHKpgp4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pexels-photo-270348-598f140868e1a20011c6ec6b.jpg"
        alt="Andreas Isidorsson"
        className="animate-fade-down w-full h-40 md:w-full md:h-60 object-cover mt-4 border-4 border-cyan-600 dark:border-cyan-600 absolute z-10 filter blur-sm"
      />
      <h1 className="animate-fade-down text-4xl md:text-7xl text-gray-200 dark:text-gray-200 mb-1 md:mb-5 font-Raleway tracking-tight z-20 relative translate-y-5 sm:translate-y-7">
        Andreas Isidorsson
      </h1>
      <p className="animate-fade-down text-1xl md:text-2xl mb-3 text-gray-200 dark:text-gray-200 font-Raleway z-20 relative translate-y-3 sm:translate-y-9">
        Under construction 🚧... System developer
      </p>
      <p className="animate-fade-down text-sm text-gray-200 dark:text-gray-200 font-Raleway tracking-tight z-20 relative translate-y-1 sm:translate-y-10">
        ...
      </p>
    </div>
  );
}
export default Information;
