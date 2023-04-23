import React from "react";
import TimeItems from "./TimeItems";
import Title from "./Title";
import timeline from "../data/timeline";

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12 px-4 ">
        <div className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-semibold tracking-tight">
          <h3>Timeline</h3>
        </div>
        {timeline.map((item, index) => (
          <TimeItems
            key={index}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}

        {/*
        {timeline.map((item) => (
          <TimeItems
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))} */}
      </div>
    </div>
  );
}

export default Timeline;
