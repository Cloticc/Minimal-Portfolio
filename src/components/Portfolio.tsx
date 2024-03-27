import PortfolioItems from "./PortfolioItems";
import React from "react";
import portfolio from "../data/portfolio";

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {portfolio.map((item) => (
          <PortfolioItems
            key={item.id}
            title={item.title}
            description={item.description}
            imgBg={item.imgBg}
            imgUrl={item.imgUrl}
            stack={item.stack}
            link={item.link}
          />
        ))}


      </div>
    </div>
  );
}


export default Portfolio;
