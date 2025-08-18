"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedGridBackgroundProps {
  children: React.ReactNode;
  className?: string;
  gridSize?: number;
  animationDelay?: number;
  lineColor?: string;
  lineOpacity?: number;
  variant?: "dots" | "lines" | "both";
}

const AnimatedGridBackground: React.FC<AnimatedGridBackgroundProps> = ({
  children,
  className = "",
  gridSize = 50,
  animationDelay = 50,
  lineColor,
  lineOpacity = 0.1,
  variant = "lines",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark") || window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", checkDarkMode);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", checkDarkMode);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [hasAnimated]);

  // Dynamic color based on theme
  const defaultLineColor = lineColor || (isDarkMode ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)");

  // Calculate number of lines based on viewport and grid size
  const numLines = Math.ceil(100 / (gridSize / 10));
  const gridLines = Array.from({ length: numLines }, (_, i) => i);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Static background grid for immediate visibility */}
      {variant !== "dots" && (
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                transparent calc(${gridSize}px - 1px),
                ${defaultLineColor} ${gridSize}px,
                transparent calc(${gridSize}px + 1px)
              ),
              linear-gradient(
                0deg,
                transparent calc(${gridSize}px - 1px),
                ${defaultLineColor} ${gridSize}px,
                transparent calc(${gridSize}px + 1px)
              )
            `,
            backgroundSize: `${gridSize}px ${gridSize}px`,
            backgroundRepeat: "repeat",
            backgroundPosition: "0 0",
            opacity: hasAnimated ? 0 : lineOpacity * 0.3,
            transition: "opacity 0.5s ease-out",
          }}
        />
      )}

      {/* Animated overlay grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        {variant !== "dots" && (
          <>
            {/* Vertical lines */}
            {gridLines.map((index) => (
              <div
                key={`vertical-${index}`}
                className="absolute top-0 bottom-0 w-px animated-grid-line"
                style={{
                  left: `${(index * gridSize) % 100}%`,
                  backgroundColor: defaultLineColor,
                  opacity: lineOpacity,
                  transform: isVisible ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "top",
                  transition: `transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * animationDelay}ms`,
                }}
              />
            ))}

            {/* Horizontal lines */}
            {gridLines.map((index) => (
              <div
                key={`horizontal-${index}`}
                className="absolute left-0 right-0 h-px animated-grid-line"
                style={{
                  top: `${(index * gridSize) % 100}%`,
                  backgroundColor: defaultLineColor,
                  opacity: lineOpacity,
                  transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: `transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${(index + gridLines.length) * animationDelay}ms`,
                }}
              />
            ))}
          </>
        )}

        {/* Dots variant */}
        {(variant === "dots" || variant === "both") && (
          <div className="absolute inset-0">
            {typeof window !== "undefined" &&
              Array.from({ length: Math.ceil(window.innerWidth / gridSize) }).map((_, x) =>
                Array.from({ length: Math.ceil(window.innerHeight / gridSize) }).map((_, y) => (
                  <div
                    key={`dot-${x}-${y}`}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      left: `${x * gridSize}px`,
                      top: `${y * gridSize}px`,
                      backgroundColor: defaultLineColor,
                      opacity: isVisible ? lineOpacity : 0,
                      transform: isVisible ? "scale(1)" : "scale(0)",
                      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${(x + y) * (animationDelay / 2)}ms`,
                    }}
                  />
                ))
              )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 grid-container">{children}</div>
    </div>
  );
};

export default AnimatedGridBackground;
