import { CSSProperties } from "react";
import ElectricChar, { CharacterDataObject } from "../ElectricChar";

// Text component that accepts character objects
type ElectricTextProps = {
  characters: CharacterDataObject[];
  defaultColor?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  weight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
  className?: string;
  style?: CSSProperties;
  borderDistance?: number;
};

const ElectricText: React.FC<ElectricTextProps> = ({
  characters,
  defaultColor = "#00ffff",
  speed = 1.5,
  chaos = 1.2,
  thickness = 1,
  size = "lg",
  weight = "bold",
  className,
  style,
  borderDistance = 6,
}) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
  };

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  const textStyle: CSSProperties = {
    ...style,
    color: "",
    display: "inline-block",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${weightClasses[weight]} ${className || ""}`}
      style={{
        display: "inline-block",
        lineHeight: 0.8,
      }}
    >
      {characters.map((char, index) => (
        <ElectricChar
          key={index}
          data={char}
          defaultColor={defaultColor}
          speed={speed}
          chaos={chaos}
          thickness={thickness}
          textStyle={textStyle}
          borderDistance={borderDistance}
        />
      ))}
    </div>
  );
};

export default ElectricText;
