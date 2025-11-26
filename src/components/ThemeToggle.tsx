import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            title={theme == "light" ? "Light" : "Dark"}
            className="btn btn-ghost btn-circle btn-sm relative overflow-hidden"
            aria-label="Theme mode"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <SunIcon
                suppressHydrationWarning
                className="absolute !size-4.5 scale-50 opacity-0 transition-all [html.dark_&]:scale-100 [html.dark_&]:opacity-100"
            />
            <MoonIcon
                suppressHydrationWarning
                className="absolute !size-4.5 scale-50 opacity-0 transition-all [html.light_&]:scale-100 [html.light_&]:opacity-100"
            />
        </button>
    );
};
