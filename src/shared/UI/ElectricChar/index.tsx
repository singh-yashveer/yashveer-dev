"use client";


import { CSSProperties, useState } from "react";
import ElectricBorder from "../ElectricBorder";
import { hexToRgba } from "@/shared/lib/helpers/hexToRgba";

export type CharacterDataObject = {
  text: string;
  color?: string;
};

type ElectricCharProps = {
  data: CharacterDataObject;
  defaultColor: string;
  speed: number;
  chaos: number;
  thickness: number;
  textStyle: CSSProperties;
  borderDistance: number;
};

const ElectricChar: React.FC<ElectricCharProps> = ({ data, defaultColor, speed, chaos, thickness, textStyle, borderDistance }) => {
  const [isCharHovered, setIsCharHovered] = useState(false);
  const charColor = data.color || defaultColor;

  if (data.text === " ") {
    return <span style={{ display: "inline-block", width: "0.5ch" }}>&nbsp;</span>;
  }

  return (
    <ElectricBorder
      color={charColor}
      speed={speed}
      chaos={chaos}
      thickness={thickness}
      isActive={isCharHovered}
      borderDistance={borderDistance}
      style={{
        display: "inline-block",
        margin: "0 1px",
      }}
    >
      <span
        style={{
          ...textStyle,
          color: isCharHovered ? "white" : textStyle.color,
          textShadow: isCharHovered
            ? `0 0 8px ${hexToRgba(charColor, 0.9)}, 0 0 16px ${hexToRgba(charColor, 0.7)}, 0 0 24px ${hexToRgba(charColor, 0.5)}`
            : "none",
          transition: "color 0.3s ease, text-shadow 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={() => setIsCharHovered(true)}
        onMouseLeave={() => setIsCharHovered(false)}
      >
        {data.text}
      </span>
    </ElectricBorder>
  );
};

export default ElectricChar;
