// import React from "react";

// import { useEffect, useState } from "react";

// import { Title } from "@material-ui/icons";

// function FollowMouseBox() {
//   const [xPos, setXPos] = useState(0);
//   const [yPos, setYPos] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setXPos(e.pageX);
//       setYPos(e.pageY);
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const boxStyle = {
//     position: "absolute",
//     left: xPos,
//     top: yPos,
//     transform: "translate(-50%, -50%)",
//     border: "1px solid #000",
//     borderRadius: "0.5rem",
//     padding: "1rem",
//     backgroundColor: "#fff",
//     boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.2)",
//     zIndex: 10,
//   };
// }

function PortfolioItem({ title, description, imgUrl, stack, link }) {
  const isSingleStack = stack.length === 1;
  const gradientColors = stack.map((item) => item.color).join(", ");

  return (
    <a
      // className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
      className="relative block overflow-hidden rounded-lg border dark:border-gray-100 border-gray-900 p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
      //  setup boxStyle for the div below

      target="_blank"
      rel="noreferrer"
      // href={link}
    >
      <div>
        <a
          className="absolute bottom-5 left-5 inline-flex items-center text-blue-600 dark:text-blue-600 hover:underline"
          href={link}
        >
          Link
          <svg
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>

            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
          </svg>
        </a>
      </div>
      {/* <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-white via-purple-700 to-purple-900"></span> */}
      <span
        className="absolute inset-x-0 bottom-0 h-2"
        style={{
          backgroundImage: `linear-gradient(to right, ${gradientColors})`,
          boxShadow: `0 0 5px ${gradientColors}`,
        }}
      ></span>
      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-mono font-bold text-black dark:text-gray-400 sm:text-xl transform -translate-x-2 -translate-y-3  ">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm text-black">
            {stack.map((item, index) => (
              <a
                key={index}
                className="inline-block px-2 py-1 font-mono rounded-md border-stone-900 dark:border-white  hover:bg-stone-900 dark:hover:bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                href="#"
                onClick={() =>
                  window.open(
                    `https://www.google.com/search?q=${item.name}`,
                    "_blank"
                  )
                }
                style={{
                  backgroundColor: item.color,
                  boxShadow: `0 0 10px ${item.color}`,
                }}
              >
                {item.name}
              </a>
            ))}
          </p>
        </div>
        <div className="hidden sm:block sm:shrink-0">
          <div className="relative">
            {imgUrl !== "" && ( // if imgUrl is not empty, then show the image below
              <img
                src={imgUrl}
                alt="my image"
                className="h-32 w-32 rounded-lg object-contain shadow-sm transition duration-300 transform-gpu hover:scale-150"
              />
            )}
            {/* {imgUrl !== "" ? (
              <img
                src={imgUrl}
                alt="my image"
                className="h-16 w-16 rounded-lg object-cover "
              />
            ) : (
              <img src={defaultImgUrl} alt="default image" className="hidden" />
            )} */}

            {/* <img
              alt=""
              src={imgUrl}
              className="h-16 w-16 rounded-lg object-cover shadow-sm hover:scale-110"
            /> */}
            {/* <div className="opacity-0 transition duration-300 absolute inset-0 bg-gray-700 hover:opacity-50 flex justify-center items-center"></div> */}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="max-w-[40ch] font-sans text-sm text-black dark:text-gray-400">
          {description}
        </p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-black dark:text-gray-400">
            {/* Published */}
          </dt>
          <dd className="text-xs text-black dark:text-gray-400">
            {/* change this. */}
          </dd>
        </div>
      </dl>
    </a>
  );
}

export default PortfolioItem;

