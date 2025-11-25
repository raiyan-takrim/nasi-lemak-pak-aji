import { Utensils } from "lucide-react";

const Footer = () => (
    <footer className="bg-card border-t border-border py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="mb-4 flex justify-center text-primary">
                <Utensils />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                Nasi Lemak Pak Aji
            </h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
                Preserving the taste of home. A project for "Thinking and
                Communication Skills" course.
            </p>
            <div className="text-xs text-muted-foreground/50">
                &copy; 2025 Student Project Showcase. All rights reserved.
            </div>
        </div>
    </footer>
);

export default Footer;