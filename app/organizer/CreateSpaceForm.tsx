'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";

const CreateSpaceForm = () => {
    const [spaceName, setSpaceName] = useState("");
    const [password, setPassword] = useState("");

    const handleCreateSpace = () => {
        if (!spaceName.trim() || !password.trim()) return;
        // add your submit or create-space logic here
    };

    return (
        <div className="glass-card p-6 sm:p-8">
        <div className="space-y-5 mb-8">
            <div>
            <label className="font-body text-sm font-medium text-foreground block mb-2">Space name</label>
            <input
                type="text"
                value={spaceName}
                onChange={(e) => setSpaceName(e.target.value)}
                placeholder="Sarah &amp; Tom&apos;s Wedding"
                className="w-full h-10 px-3 rounded-lg border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-foreground/20 transition-all"
            />
            </div>
            <div>
            <label className="font-body text-sm font-medium text-foreground block mb-2">Access password</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Something memorable for your guests"
                className="w-full h-10 px-3 rounded-lg border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-foreground/20 transition-all"
            />
            </div>
        </div>
        <Button
            size="lg"
            className="w-full"
            onClick={handleCreateSpace}
            disabled={!spaceName.trim() || !password.trim()}
        >
            Create Space
        </Button>
        <p className="font-body text-xs text-muted-foreground text-center mt-4">
            You&apos;ll get a Space ID to share with guests
        </p>
        </div>
    );
};

export default CreateSpaceForm;
