"use client";

import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="text-xl font-bold text-foreground">Yashveer</div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#home" className="text-foreground/60 hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#about" className="text-foreground/60 hover:text-foreground transition-colors">
            About
          </a>
          <a href="#projects" className="text-foreground/60 hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-foreground/60 hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
