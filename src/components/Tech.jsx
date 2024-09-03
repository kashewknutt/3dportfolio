import React, { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          className='w-28 h-28 relative'
          key={technology.name}
          onMouseEnter={() => setHoveredTech(technology.name)}
          onMouseLeave={() => setHoveredTech(null)}
        >
          <BallCanvas icon={technology.icon} />
          {hoveredTech === technology.name && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 rounded bg-black text-white text-xs whitespace-nowrap">
              {technology.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
