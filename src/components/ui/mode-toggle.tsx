import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ui/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="p-1 rounded-full bg-transparent focus:outline-none border-none"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-yellow-400 dark:text-yellow-500" />
      ) : (
        <Moon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      )}
    </button>
  );
}
