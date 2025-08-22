import { useTheme } from "../hooks/useTheme";
import { cn } from "../lib/utils";
import { Sun, Moon } from "lucide-react";

const ThemeToggler = () => {
  const { isDark, toggleTheme, mounted } = useTheme();

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={toggleTheme}
        className={cn(
          "relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border",
          "bg-background hover:bg-accent transition-all duration-200",
          "focus:outline-none focus:ring-none",
          "group overflow-hidden"
        )}
        aria-label="Toggle theme"
      >
        <div className="relative w-5 h-5">
          <Sun
            className={cn(
              "absolute inset-0 w-5 h-5 transition-all duration-500 transform",
              !mounted || isDark ? "opacity-0 scale-75 rotate-180" : "opacity-100 scale-100 rotate-0",
              "group-hover:rotate-90 hover:transition-transform hover:duration-300"
            )}
          />

          <Moon
            className={cn(
              "absolute inset-0 w-5 h-5 transition-all duration-500 transform",
              !mounted || isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-180"
            )}
          />
        </div>
      </button>
    </div>
  );
};

export default ThemeToggler;
