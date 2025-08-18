import React from "react";
import AnimatedGridBackground from "./AnimatedGridBackground";

interface GridBackgroundOptions {
  className?: string;
  gridSize?: number;
  animationDelay?: number;
  lineColor?: string;
  lineOpacity?: number;
}

/**
 * Higher-Order Component that wraps any component with an animated grid background
 * @param WrappedComponent - The component to wrap
 * @param options - Configuration options for the grid background
 * @returns Enhanced component with animated grid background
 */
function withAnimatedGridBackground<P extends object>(WrappedComponent: React.ComponentType<P>, options: GridBackgroundOptions = {}) {
  const { className = "", gridSize = 50, animationDelay = 50, lineColor, lineOpacity = 0.1 } = options;

  const WrappedComponentWithGrid = (props: P) => {
    // Determine line color based on theme
    const defaultLineColor = lineColor || "rgba(156, 163, 175, 0.3)"; // gray-400 with opacity

    return (
      <AnimatedGridBackground
        className={className}
        gridSize={gridSize}
        animationDelay={animationDelay}
        lineColor={defaultLineColor}
        lineOpacity={lineOpacity}
      >
        <WrappedComponent {...props} />
      </AnimatedGridBackground>
    );
  };

  // Set display name for debugging
  WrappedComponentWithGrid.displayName = `withAnimatedGridBackground(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return WrappedComponentWithGrid;
}

export default withAnimatedGridBackground;
