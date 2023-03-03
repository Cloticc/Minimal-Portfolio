import React from "react";

function Information() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Andreas Isidorsson
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I'm a self-taught software engineer and web developer with a passion for
        technology and learning. I've been coding for over 8 years and have been
        working professionally for 2~ years. I've worked with a wide range of
        technologies and languages, but I'm most passionate about Lua @
        <a
          href="https://github.com/Cloticc"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          Clotic
        </a>{" "}
      </p>
    </div>
  );
}

export default Information;
