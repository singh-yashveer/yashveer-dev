"use client";

import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import Text from "../Text";
import { FolderOpen, Home, Mail, User } from "lucide-react";
import ContactForm from "../ContactForm";

interface NavigationItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

interface FloatingNavigationProps {
  items?: NavigationItem[];
  className?: string;
}

const ICON_SIZE = 16; // Default icon size

const navigationItems = [
  { href: "#hero", label: "Home", icon: <Home size={ICON_SIZE} /> },
  { href: "#about", label: "About", icon: <User size={ICON_SIZE} /> },
  { href: "#projects", label: "Projects", icon: <FolderOpen size={ICON_SIZE} /> },
];

const FloatingNavigation = ({ items = navigationItems, className }: FloatingNavigationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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

  const handleContactClick = () => {
    setIsOpen(true);
  };

  const handleCloseContactForm = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ContactForm isOpen={isOpen} onClose={handleCloseContactForm} />
      <div
        className={cn(
          "fixed bottom-6 left-1/2 z-40 transform -translate-x-1/2 transition-all duration-300 ease-in-out",
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
              <Text className="hidden sm:block">{item.label}</Text>
              {/* Show only icons on mobile */}
              {!item.icon && <span className="sm:hidden">{item.label.charAt(0)}</span>}
            </a>
          ))}

          <button
            onClick={handleContactClick}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-200 rounded-full hover:bg-accent/50 hover:scale-105"
          >
            <span className="w-4 h-4">
              <Mail size={ICON_SIZE} />
            </span>
            <Text className="hidden sm:block">Contact</Text>
          </button>
        </nav>
      </div>
    </>
  );
};

export default FloatingNavigation;
