'use client';

import { Utensils } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../ui/theme-toggler";

import navItems from "@/data/nav-items";

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                                <Utensils />
                            </div>
                            <span className="invisible md:visible font-serif font-bold text-xl tracking-tight text-foreground">
                                Pak Aji
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-6 text-sm md:text-base">
                        {navItems.map((item) => {

                            const linkHref = pathname === "/" ? item.href : `/${item.href}`;

                            return (
                                <Link
                                    key={item.name}
                                    href={linkHref}
                                    className="text-foreground hover:text-primary transition-colors font-medium"
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;