import Link from "next/link";
import SpotMeLogo from "@/components/ui/SpotMeLogo";
import SpaceForm from "@/components/SpaceForm";

const Page = () => {
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
                            <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-2">Find your photos</h1>
                            <p className="font-body text-muted-foreground">Enter the details shared by your event organizer.</p>
                        </div>
                        <SpaceForm />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Page;