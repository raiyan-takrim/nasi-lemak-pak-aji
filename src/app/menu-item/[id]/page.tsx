import Link from 'next/link';
import menuItems from '@/data/menu-items';
import { Info, Utensils } from 'lucide-react';
import Image from 'next/image';
import { QRWrapper } from '@/components/share/qr-wrapper';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ShareMenuItem } from '@/components/share-menu-item';
import ShareButton from '@/components/share/share-button';
import QRCodeGenerator from '@/components/share/qr-generator';

// --- Page Component ---
export default async function page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const item = menuItems.find((i) => i.id === parseInt(id, 10));

    if (!item) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Item Not Found</h2>
                    <Link href="/" className="text-primary hover:underline">Return to Menu</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">

            <main className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">

                    {/* Left Column: Image & Origin Tag */}
                    <div className="space-y-6">
                        <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-2xl ring-1 ring-border group">
                            <Image
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                fill
                            />
                            <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/80 backdrop-blur text-foreground px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                                Origin Story
                            </div>
                        </div>

                        {/* History Card (Moved below image for better layout on full page) */}
                        <div className="bg-secondary/30 rounded-xl p-8 border border-border">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                                <Info /> Historical Context
                            </h4>
                            <p className="text-lg text-foreground/90 leading-relaxed italic font-serif">
                                "{item.history}"
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Details & Sub Menu */}
                    <div className="flex flex-col h-full">
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <Utensils />
                                </div>
                                <span className="text-sm font-semibold text-primary tracking-wide uppercase">
                                    {item.tag || "Signature Dish"}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4 leading-tight">
                                {item.name}
                            </h1>
                            <p className="text-3xl font-bold text-primary mb-6">{item.price}</p>

                            <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary/20 pl-6">
                                {item.description}
                            </p>
                        </div>

                        <div className="mt-auto">
                            <h3 className="text-xl font-bold font-serif text-foreground mb-6 border-b border-border pb-2">
                                Recommended Add-ons
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {item.sub_menu.map((sub, idx) => (
                                    <div key={idx} className="flex justify-between items-center p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors shadow-sm">
                                        <span className="font-medium text-foreground">{sub.name}</span>
                                        <span className="text-primary font-bold">{sub.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row gap-4">
                            <Dialog>
                                <DialogTrigger type='button' className='bg-primary text-primary-foreground font-bold p-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.98] flex-1'>Get QR</DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Share this Menu Item</DialogTitle>
                                        <DialogDescription>
                                            Scan the QR code below to view this menu item online.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <QRCodeGenerator />
                                </DialogContent>
                            </Dialog>
                            <ShareButton />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}