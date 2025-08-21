"use client";

import { CodeXml } from "lucide-react";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header className="fixed top-6 left-1/2 z-50 transform -translate-x-1/2 w-[95%] max-w-4xl">
      <div className="flex items-center justify-between px-10 py-3 bg-background/60 backdrop-blur-sm border border-border rounded-full shadow-lg">
        <div className="flex items-center space-x-2">
          <CodeXml />
          <div className="text-xl font-bold text-foreground">Yashveer Singh</div>
        </div>

        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
