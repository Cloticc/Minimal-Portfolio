import React from "react";

function Information() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-mono tracking-tight">
        Andreas Isidorsson
      </h1>
      <p className="text-base md:text-xl mb-3 font-mono">
        A developer that enjoy coding and gaming.
      </p>
      <p className="text-sm max-w-xl mb-6 font-mono tracking-tight">
      I'm a self-taught developer deeply enthusiastic about technology and gaming. Over the past three years, I've honed my coding skills, gaining experience across a diverse spectrum of technologies and programming languages. @
        <a
          href="https://github.com/Cloticc"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-blue-600"
          rel="noreferrer noopener"
        >
          Clotic
        </a>{" "}
      </p>
    </div>
  );
}

export default Information;
