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

const handleMouseLeave = (event) => {
  event.currentTarget.style.transform = "";
};

// const [isOpened, setIsOpened] = useState(false);
// const toggleModal = () => setIsOpened(!isOpened);

function PortfolioItem({ title, description, imgBg, imgUrl, stack, link }) {
  const gradientColors = stack.map((item) => item.color).join(", ");

  return (
    <a
      className="relative block overflow-hidden rounded-lg border bg-cover bg-center duration-700 ease-out dark:border-gray-400 border-gray-900 p-4 sm:p-6 lg:p-9 hover:shadow-2xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: `url(${imgBg})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // transition: "transform 0.5s ease-out",
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
          <h3 className="font-raleway text-24 font-semibold  text-gray-100 dark:text-gray-200 transform -translate-x-1 -translate-y-3 whitespace-nowrap">
            {title}
          </h3>
          {/* <p className="font-raleway text-24 font-semibold  text-gray-100 dark:text-gray-200 transform -translate-x-1 -translate-y-3 whitespace-nowrap"> */}
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
                  boxShadow: `0 0 15px ${item.color}`,
                }}
              >
                {item.name}
              </a>
            ))}
          </p>
        </div>
        <div className="hidden sm:block sm:shrink-0">
          <div className="">
            {imgUrl !== "" && ( // if imgUrl is not empty, then show the image below
              <img
                src={imgUrl}
                alt="my image"
                className="h-32 w-32 rounded-lg object-contain hover:scale-[3]"
                onClick={toggleModal}
              />
            )}
          </div>
        </div>
      </div>
      

      <div className="mt-1">
        <p className="font-raleway font-bold max-w-[40ch] text-sm  text-gray-100 dark:text-gray-200">
          {/* <p className="font-raleway text-24 font-semibold  text-black dark:text-gray- sm:text-xl transform -translate-x-2 -translate-y-3"> */}
          {description}
        </p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-black dark:text-gray-400"></dt>
          <dd className="text-xs text-black dark:text-gray-400"></dd>
        </div>
        <div>
          <a
            className="absolute bottom-5 left-5 inline-flex items-center text-blue-600 dark:text-blue-600 hover:underline"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
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
      </dl>
    </a>
  );
}

export default PortfolioItem;
