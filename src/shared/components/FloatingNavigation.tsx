"use client";

import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

interface NavigationItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

interface FloatingNavigationProps {
  items: NavigationItem[];
  className?: string;
}

const FloatingNavigation = ({ items, className }: FloatingNavigationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navigation when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      }
      // Hide navigation when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 z-50 transform -translate-x-1/2 transition-all duration-300 ease-in-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
        className
      )}
    >
      <nav className="flex items-center gap-1 rounded-full bg-background/60 backdrop-blur-sm border border-border px-3 py-2 shadow-lg">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-200 rounded-full hover:bg-accent/50 hover:scale-105"
          >
            {item.icon && <span className="w-4 h-4">{item.icon}</span>}
            <span className="hidden sm:block">{item.label}</span>
            {/* Show only icons on mobile */}
            {!item.icon && <span className="sm:hidden">{item.label.charAt(0)}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default FloatingNavigation;
