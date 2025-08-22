"use client";

import { useState } from "react";
import Text from "../Text";

const AnimatedNameReveal = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative cursor-pointer select-none" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="flex items-center">
        <div className="relative overflow-hidden">
          <div
            className={`transition-all duration-700 ease-in-out inline-block animate  ${
              isHovered ? "transform -translate-x-1/2 animate-none" : "transform translate-x-0 opacity-100 animate-pulse"
            }`}
          >
            <Text typography="text-display-sm">coded by Yashveer</Text>
          </div>
          <div
            className={`transition-all duration-700 ease-in-out absolute top-0 left-0 ${
              isHovered ? "transform translate-x-22 opacity-100" : "transform translate-x-40 opacity-0"
            }`}
          >
            <Text typography="text-display-sm">Singh</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedNameReveal;
