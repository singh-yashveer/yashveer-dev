import React, { CSSProperties } from "react";

import "./SpinningLoader.css";

interface SpinningLoaderProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const rotateAnimation: CSSProperties = {
  animation: "rotateAnimation 2s linear infinite",
  transformOrigin: "center",
};

const dashAnimation: CSSProperties = {
  fill: "none",
  strokeWidth: 2,
  strokeDasharray: "1, 200",
  strokeDashoffset: 0,
  strokeLinecap: "round",
  animation: "dashAnimation 1.5s ease-in-out infinite",
};

const SpinningLoader: React.FC<SpinningLoaderProps> = ({
  size = 32,
  color = "#2C5EE7",
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="25 25 50 50"
      style={rotateAnimation}
      {...rest}
    >
      <circle
        r="20"
        cy="50"
        cx="50"
        style={{ ...dashAnimation, stroke: color }}
      />
    </svg>
  );
};

export default SpinningLoader;
