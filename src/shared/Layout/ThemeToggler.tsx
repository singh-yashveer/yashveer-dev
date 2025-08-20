import { useTheme } from "../hooks/useTheme";
import { cn } from "../lib/utils";

const ThemeToggler = () => {
  const { isDark, toggleTheme, mounted } = useTheme();

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={toggleTheme}
        className={cn(
          "relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border",
          "bg-background hover:bg-accent transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          "group overflow-hidden"
        )}
        aria-label="Toggle theme"
      >
        <div className="relative w-5 h-5">
          {/* SVG Container with morphing animation */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="absolute inset-0 text-foreground transition-all duration-500">
            {/* Sun Icon */}
            <g
              className={cn(
                "transition-all duration-500 transform",
                !mounted || isDark ? "opacity-0 scale-75 rotate-180" : "opacity-100 scale-100 rotate-0"
              )}
            >
              {/* Sun center */}
              <circle cx="12" cy="12" r="4" fill="currentColor" className="transition-all duration-500" />
              {/* Sun rays */}
              <path
                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="transition-all duration-500"
              />
            </g>

            {/* Moon Icon */}
            <g
              className={cn(
                "transition-all duration-500 transform",
                !mounted || isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-180"
              )}
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor" className="transition-all duration-500" />
            </g>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default ThemeToggler;
