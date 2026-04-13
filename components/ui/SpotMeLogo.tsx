import { Aperture } from "lucide-react";

const SpotMeLogo = ({ size = "default" }: { size?: "default" | "large" }) => {
    const iconSize = size === "large" ? 24 : 18;
    const textClass = size === "large" ? "text-2xl" : "text-lg";

    return (
        <div className="flex items-center gap-2">
        <Aperture size={iconSize} className="text-foreground" strokeWidth={1.5} />
        <span className={`font-display text-foreground ${textClass}`}>
            SpotMe
        </span>
        </div>
    );
};

export default SpotMeLogo;
