import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import React, { useRef, useState } from "react";

import { IoEllipse } from "react-icons/io5";

function TimelineItem({ year, title, duration, details }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsRef = useRef(null);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" /> */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center p-5">
          <div className="flex-shrink-0 w-4 h-4 mr-4 bg-blue-600 rounded-full animate-bounce">
            <IoEllipse className=" text-white w-3 h-3" />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-900 dark:text-gray-400">
              {year}
            </div>
            <div className="text-lg font-semibold text-slate-900 dark:text-gray-400">
              {title}
            </div>
            <div className="text-sm font-medium text-slate-900 dark:text-gray-400">
              {duration}
            </div>
          </div>
        </div>
        <div className="flex items-center ml-6">
          <div
            className="text-slate-900 dark:text-gray-400 cursor-pointer "
            onClick={toggleExpansion}
          >
            {isExpanded ? (
              <HiOutlineMinus className="w-4 h-4" />
            ) : (
              <HiOutlinePlus className="w-4 h-4" />
            )}
          </div>
        </div>
      </div>
      {isExpanded && (
        <div
          ref={detailsRef}
          className="my-2 text-base font-normal text-slate-900 dark:text-stone-200 px-5"
        >
          {details}
        </div>
      )}
    </div>
  );
}

export default TimelineItem;

// import React from "react";

// function TimelineItem({ year, title, duration, details }) {
//   return (
//     <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
//       <li className="mb-10 ml-4">
//         <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
//         <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
//           <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
//             {year}
//           </span>
//           <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
//             {title}
//           </h3>
//           <div className="my-1 text-sm font-normal leading-none text-stone-900 dark:text-stone-200">
//             {duration}
//           </div>
//         </div>
//         <p className="my-2 text-base font-normal text-stone-800 dark:text-stone-300">
//           {details}
//         </p>
//       </li>
//     </ol>
//   );
// }

// export default TimelineItem;

// import React from "react";

// function TimelineItem({ year, title, duration, details }) {
//   return (
//     <div className="flex items-center justify-between w-full">
//       <div className="flex items-center">
//         <div className="flex-shrink-0 w-4 h-4 mr-4">
//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="12" cy="12" r="10" fill="#3B82F6" />
//           </svg>
//         </div>
//         <div>
//           <div className="text-sm font-medium text-gray-700">{year}</div>
//           <div className="text-lg font-semibold text-gray-900">{title}</div>
//           <div className="text-sm font-medium text-gray-700">{duration}</div>
//         </div>
//       </div>
//       <div className="flex items-center ml-6">
//         <div className="text-gray-600">
//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M6 12H18"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M12 6L18 12L12 18"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//         <div className="ml-2 text-gray-500 font-medium text-sm">Learn More</div>
//       </div>
//     </div>
//   );
// }

// export default TimelineItem;
