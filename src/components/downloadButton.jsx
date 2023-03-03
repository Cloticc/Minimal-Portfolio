// import "./Navbar.css";

import React, { useEffect, useState } from "react";

function DownloadButton() {
  const [blocked, setBlocked] = useState(false);
  const [percent, setPercent] = useState(0);
  const [loadingInterval, setLoadingInterval] = useState(null);

  const handleButtonClick = () => {
    if (blocked) return;
    setBlocked(true);
    const downloadLink =
      "https://drive.google.com/file/d/1v_22b24HPRQ74OnEMn-NY5c2rlsWSftA/view";

    window.open(downloadLink, "_blank");

    const arrow = document.getElementById("arrow");
    arrow.classList.add("animate-down");

    setLoadingInterval(
      setInterval(() => {
        setPercent((prevPercent) => prevPercent + 1);
      }, 10)
    );

    setTimeout(() => {
      clearInterval(loadingInterval);

      const progress = document.getElementById("progress");
      const check = document.getElementById("check");

      setTimeout(() => {
        progress.classList.remove("bg-opacity-20");
        progress.classList.add("bg-opacity-0");
        check.classList.remove("w-0");
        check.classList.add("w-5");

        setTimeout(() => {
          check.classList.add("w-0");
          check.classList.remove("w-5");
          setTimeout(() => {
            reset();
          }, 1000);
        }, 1000);
      }, 500);
    }, 1000);
  };

  function reset() {
    setPercent(0);
    const arrow = document.getElementById("arrow");
    arrow.classList.remove("animate-down");

    const progress = document.getElementById("progress");
    progress.style.height = "0%";

    setTimeout(() => {
      progress.classList.remove("bg-opacity-0");
      progress.classList.add("bg-opacity-20");
      setBlocked(false);
    }, 200);
  }
  return (
    <div className=" flex justify-center items-center ">
      <button
        id="button"
        className="group rounded-md shadow bg-blue-500 text-white cursor-pointer flex justify-between items-center overflow-hidden transition-all hover:glow"
        onClick={handleButtonClick}
      >
        <div className="relative w-12 h-12 bg-white bg-opacity-20 text-white flex justify-center items-center transition-all">
          <svg
            id="arrow"
            className="w-4 h-4 transition-all group-hover:-translate-y-1"
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
          <svg
            id="check"
            className="absolute z-10 w-0 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white transition-all"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <div
            id="progress"
            className="absolute w-full h-0 bg-white bg-opacity-20 top-0 duration-200"
            style={{ height: percent + "%" }}
          ></div>
        </div>
        <p className="px-5">cv.pdf</p>
      </button>
    </div>
  );
}

export default DownloadButton;
