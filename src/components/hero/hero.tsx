import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Hero = () => (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-6 tracking-wide uppercase">
                    Thinking & Communication Skills Project
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                    The Taste of{" "}
                    <span className="text-primary italic">Malaysian</span> Heritage
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                    Experience the authenticity of Nasi Lemak Pak Aji. Preserving
                    tradition, one plate at a time. A culinary journey through our
                    national identity.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="#menu"
                        className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 w-full sm:w-auto text-center"
                    >
                        View Menu
                    </Link>
                    <Link
                        href="#heritage"
                        className="px-8 py-3 bg-white dark:bg-card text-foreground font-semibold rounded-lg border border-border hover:bg-accent transition-all w-full sm:w-auto text-center hover:border-primary/90"
                    >
                        Read History
                    </Link>
                </div>
                <div className="mt-16 flex justify-center">
                    <ChevronDown className="animate-bounce" />
                </div>
            </div>
        </div>

        {/* Abstract Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
    </div>
);
export default Hero;