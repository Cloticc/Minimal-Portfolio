import PortfolioItems from "./PortfolioItems";
import React from "react";
import portfolio from "../data/portfolio";

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map(({ index, imgUrl, title, description, stack, link }) => (
          <PortfolioItems
            key={index}
            imgUrl={imgUrl}
            title={title}
            description={description}
            stack={stack}
            link={link}
          />
        ))}
      </div>
    </div>
  );
}

// function Portfolio() {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {portfolio.map(({ index, imgUrl, title, description, stack, link }) => (
//           <PortfolioItems
//             key={index}
//             imgUrl={imgUrl}
//             title={title}
//             description={description}
//             stack={stack}
//             link={link}
//           />
//         ))}

//         {/* {portfolio.map(({ index, imgUrl, title, description, stack, link }) => (
//           <PortfolioItems
//             key={index}
//             imgUrl={imgUrl}
//             title={title}
//             description={description}
//             stack={stack}
//             link={link}
//           />
//         ))} */}
//       </div>
//     </div>
//   );
// }

export default Portfolio;

// function Portfolio() {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {portfolio.map((project) => (
//           <PortfolioItems
//             imgUrl={project.imgUrl}
//             title={project.title}
//             description={project.description}
//             stack={project.stack}
//             link={project.link}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
