/* eslint-disable react/no-unescaped-entities */
import { ArrowRight, Scan, Camera, Download, ImagePlus, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SpotMeLogo from "@/components/ui/SpotMeLogo";
import Link from "next/link";
import dynamic from "next/dynamic";

const steps = [
  { icon: ImagePlus, title: "Upload", desc: "Organizer uploads all event photos to a private space" },
  { icon: Sparkles, title: "Detect", desc: "AI scans every photo and identifies unique faces" },
  { icon: Camera, title: "Verify", desc: "Guests take a quick selfie to find themselves" },
  { icon: Download, title: "Collect", desc: "Download every photo you appear in, instantly" },
];

export default function Page() {

  const ThemeToggleNoSSR = dynamic(() => import('../components/ThemeToggle'), { ssr: !!false })

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="container max-w-6xl mx-auto flex items-center justify-between h-14 px-4">
        <SpotMeLogo />
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground">
            <Link href="/attendee">
              Find Photos
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/organizer">
              Create Space
            </Link>
          </Button>
          <ThemeToggleNoSSR />
        </div>
      </nav>

      {/* Hero */}
      <section className="container max-w-6xl mx-auto px-4 pt-20 sm:pt-32 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-muted-foreground mb-8 opacity-0 animate-fade-up">
          <Scan size={14} />
          AI-powered face recognition
        </div>
        
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 opacity-0 animate-fade-up leading-[1.1]" style={{ animationDelay: "0.1s" }}>
          Find yourself in
          <br />
          <span className="italic">event photos</span>
        </h1>
        
        <p className="font-body text-base sm:text-lg text-muted-foreground max-w-lg mx-auto mb-10 opacity-0 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
          Upload hundreds of photos, let AI detect every face, and give each guest their personal collection — privately and beautifully.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button asChild size="lg" className="px-8 gap-2 text-base">
            <Link href="/organizer">
              Create a Space
              <ArrowRight size={16} />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8 gap-2 text-base">
            <Link href="/organizer">
              Find My Photos
            </Link>
          </Button>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border">
        <div className="container max-w-6xl mx-auto px-4 py-20 sm:py-28">
          <div className="text-center mb-16">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">How it works</p>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground">Four simple steps</h2>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((s, i) => (
              <div
                key={i}
                className="text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${0.1 * i + 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary mb-4">
                  <s.icon size={20} className="text-foreground" strokeWidth={1.5} />
                </div>
                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mb-2">
                  Step {i + 1}
                </p>
                <h3 className="font-display text-xl text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container max-w-6xl mx-auto px-4 py-20 sm:py-28">
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <Link href="/organizer"
              className="glass-card-hover p-8 text-left group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center mb-5">
                <Users className="text-primary-foreground" size={18} />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">I'm organizing</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Create a private space, upload event photos, and share access with your guests.
              </p>
              <div className="flex items-center gap-1 text-sm font-medium text-foreground mt-4 group-hover:gap-2 transition-all">
                Get started <ArrowRight size={14} />
              </div>
            </Link>

            <Link href="/attendee"
              className="glass-card-hover p-8 text-left group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center mb-5">
                <Camera className="text-primary-foreground" size={18} />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">I'm a guest</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Enter your event code, verify your face, and find every photo of you instantly.
              </p>
              <div className="flex items-center gap-1 text-sm font-medium text-foreground mt-4 group-hover:gap-2 transition-all">
                Find photos <ArrowRight size={14} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container max-w-6xl mx-auto px-4 py-8 flex items-center justify-between">
          <SpotMeLogo />
          <p className="font-body text-xs text-muted-foreground">
            Your memories, handled with care.
          </p>
        </div>
      </footer>
    </div>
  );
};