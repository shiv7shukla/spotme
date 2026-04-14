/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SpotMeLogo from "@/components/ui/SpotMeLogo";
import Link from "next/link";

    const Page = () => {
    const [spaceName, setSpaceName] = useState("");
    const [password, setPassword] = useState("");
    // const spaceId = "GRB-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    const handleCreateSpace = () => {
        if (!spaceName.trim() || !password.trim()) return;
    };

    return (
    <div className="min-h-screen bg-background flex">
        <main className="flex-1 min-h-screen overflow-y-auto">
            <div className="flex items-center justify-between p-4">
                <Link href="/">
                    <SpotMeLogo />
                </Link>
            </div>
            <div className="p-4 sm:p-8 max-w-3xl mx-auto">
                <div className="opacity-0 animate-fade-up">
                <div className="mb-8">
                    <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-2">Create a space</h1>
                    <p className="font-body text-muted-foreground">Set up a private space for your event photos.</p>
                </div>
                <div className="glass-card p-6 sm:p-8">
                    <div className="space-y-5 mb-8">
                        <div>
                            <label className="font-body text-sm font-medium text-foreground block mb-2">Space name</label>
                            <input
                                type="text"
                                value={spaceName}
                                onChange={(e) => setSpaceName(e.target.value)}
                                placeholder="Sarah & Tom's Wedding"
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
                You'll get a Space ID to share with guests
                </p>
            </div>
            </div>
            </div>
        </main>
        </div>
    )
};

export default Page;
