import React, { useState } from "react";

const handleMouseMove = (event) => {
  let { offsetX, offsetY } = event.nativeEvent;
  const { offsetWidth, offsetHeight } = event.currentTarget;

  offsetX -= offsetWidth / 2;
  offsetY -= offsetHeight / 2;

  const tilt = 20; // Tilt degree
  const left = (offsetX / offsetWidth) * tilt;
  const top = -(offsetY / offsetHeight) * tilt;

  // event.currentTarget.style.transform = `perspective(500px) rotateX(${top}deg) rotateY(${left}deg) scale3d(1, 1, 1)`;
  event.currentTarget.style.transform = `perspective(500px) rotateX(${top}deg) rotateY(${left}deg) scale3d(1.05, 1.05, 1.05)`;
  // event.currentTarget.style.transform = `perspective(500px) rotateX(${top}deg) rotateY(${left}deg) scale3d(1.2, 1.2, 1.2)`;
};

// const handleMouseLeave = (event) => {
//   event.currentTarget.style.transform = "";
// };


function PortfolioItem({ title, description, imgBg, imgUrl, stack = [], link, }) {
  const gradientColors = stack.map((item) => item.color).join(", ");

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (

    <a
      className="relative block overflow-hidden rounded-lg border bg-cover bg-center duration-700 ease-out dark:border-gray-400 border-gray-900 p-4 sm:p-5  hover:shadow-2xl mt-5"
      // onMouseMove={handleMouseMove}
      // onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: `url(${imgBg})`,
      }}
      target="_blank"
      rel="noreferrer"
    >

      {/* <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-white via-purple-700 to-purple-900"></span> */}
      <span
        className="absolute inset-x-0 bottom-0 h-2"
        style={{
          backgroundImage: `linear-gradient(to right, ${gradientColors})`,
          boxShadow: `0 0 5px ${gradientColors}`,
        }}
      ></span>

      {/* <div className="sm:flex sm:justify-between  sm:gap-4"> */}
      <div className="sm:flex">
        <div>
          <h3 className="font-raleway text-24 font-semibold  text-black-100 dark:text-gray-200 transform -translate-x-1 -translate-y-3 whitespace-nowrap">
            {title}
          </h3>
          {/* <p className="font-raleway text-24 font-semibold  text-gray-100 dark:text-gray-200 transform -translate-x-1 -translate-y-3 whitespace-nowrap"> */}
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm text-black mr-5 mt-3">
            {stack.map((item, index) => (
              <button
                key={index}
                className="inline-block px-2 py-1 font-mono rounded-md border-stone-900 dark:border-white  hover:bg-stone-900 dark:hover:bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                onClick={() =>
                  window.open(
                    `https://www.google.com/search?q=${item.name}`,
                    "_blank"
                  )
                }
                style={{
                  backgroundColor: item.color,
                  boxShadow: `0 0 15px ${item.color}`,
                }}
              >
                {item.name}
              </button>
            ))}
          </p>
        </div>
        <div className="hidden sm:block sm:shrink-0">
          <div className="">
            {imgUrl !== "" && ( // if imgUrl is not empty, then show the image below
              <img
                src={imgUrl}
                alt="my image"
                className="h-32 w-32 rounded-lg object-contain cursor-pointer transform hover:scale-105 transition-transform"
                onClick={toggleModal}
              />
            )}
          </div>

          {isOpen && (
            <div
              className="fixed z-10 inset-0 overflow-y-auto "
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
              onClick={toggleModal} // Close the modal when clicking on the overlay
            >
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                  aria-hidden="true"
                ></div>
                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <div
                  className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 max-w-full w-full sm:max-w-md sm:w-3/4 lg:w-1/2 scale-200"
                  onClick={(e) => e.stopPropagation()} // Prevent the click event from propagating to the overlay
                >
                  <button
                    className="absolute top-0 right-0 m-2 text-2xl leading-none hover:text-gray-300"
                    onClick={toggleModal}
                  >
                    &times;
                  </button>
                  {/* <img className="w-full h-full" src={imgUrl} alt="my image" /> */}
                  <img className="w-full h-full" src={imgUrl} alt="my image" />



                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-1">
        <p className="font-raleway font-bold max-w-[40ch] text-sm  text-black-100 dark:text-gray-200">
          {/* <p className="font-raleway text-24 font-semibold  text-black dark:text-gray- sm:text-xl transform -translate-x-2 -translate-y-3"> */}
          {description}
        </p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-black dark:text-gray-400"></dt>
          <dd className="text-xs text-black dark:text-gray-400"></dd>
        </div>

        <div className="absolute bottom-5 left-5 inline-flex items-center text-blue-600 dark:text-blue-600 hover:underline">
          {/* Link to project */}

          <button
            className="text-xs font-bold uppercase tracking-wider hover:underline"
          >
            <a href={link} target
              ="_blank" rel="noreferrer">
              View Project
            </a>
          </button>

        </div>
      </dl>
    </a>
  );
}

export default PortfolioItem;
