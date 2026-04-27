"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const ThemeToggle = () => {
    const [dark, setDark] = useState<boolean>(() => {
        if (typeof window === "undefined") return false;
        const stored = window.localStorage.getItem("theme");
        if (stored === "dark") return true;
        if (stored === "light") return false;
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }));

    useEffect(() => {
        document.documentElement.classList.toggle("dark", !dark);
        window.localStorage.setItem("theme", dark ? "dark" : "light");
}, [dark]);

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setDark((d) => !d)}
            className="h-9 w-9"
            aria-label="Toggle theme"
        >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
    );
};

export default ThemeToggle;
