"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const ThemeToggle = () => {
    const [dark, setDark] = useState(() =>
        {
            if (localStorage.getItem("theme") !== null)
                return localStorage.getItem("theme");
            return false;
        }
    );

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
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
