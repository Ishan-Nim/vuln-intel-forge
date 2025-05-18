
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeProvider";
import { Toggle } from "@/components/ui/toggle";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className="flex items-center space-x-2">
      <Toggle
        pressed={theme === "dark"}
        onPressedChange={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle theme"
        className="p-2 text-primary hover:bg-accent hover:text-accent-foreground"
      >
        {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        <span className="sr-only">Toggle theme</span>
      </Toggle>
    </div>
  );
}
