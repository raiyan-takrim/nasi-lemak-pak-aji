import Link from 'next/link';
import menuItems from '@/data/menu-items';
import { Info, Utensils } from 'lucide-react';
import Image from 'next/image';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ShareButton from '@/components/share/share-button';
import QRCodeGenerator from '@/components/share/qr-generator';
import type { Metadata } from 'next';

// Generate dynamic metadata for SEO
export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>
}): Promise<Metadata> {
    const { id } = await params;
    const item = menuItems.find((i) => i.id === parseInt(id, 10));

    if (!item) {
        return {
            title: 'Item Not Found | Nasi Lemak Pak Aji',
            description: 'The menu item you are looking for could not be found.',
        };
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const url = `${baseUrl}/menu-item/${id}`;
    const imageUrl = item.image.startsWith('http')
        ? item.image
        : `${baseUrl}${item.image}`;

    return {
        title: `${item.name} - ${item.price} | Nasi Lemak Pak Aji`,
        description: item.description,
        keywords: [item.name, 'Nasi Lemak', 'Malaysian Food', 'Pak Aji', item.tag || 'Malaysian cuisine'].join(', '),
        authors: [{ name: 'Nasi Lemak Pak Aji' }],
        openGraph: {
            title: `${item.name} - ${item.price}`,
            description: item.description,
            url: url,
            siteName: 'Nasi Lemak Pak Aji',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: item.name,
                }
            ],
            locale: 'en_MY',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${item.name} - ${item.price}`,
            description: item.description,
            images: [imageUrl],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

// Generate static params for all menu items
export async function generateStaticParams() {
    return menuItems.map((item) => ({
        id: item.id.toString(),
    }));
}

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

    // Structured data for SEO
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "MenuItem",
        "name": item.name,
        "description": item.description,
        "offers": {
            "@type": "Offer",
            "price": item.price.replace(/[^\d.]/g, ''),
            "priceCurrency": "MYR"
        },
        "image": item.image.startsWith('http') ? item.image : `${baseUrl}${item.image}`,
        "url": `${baseUrl}/menu-item/${item.id}`,
        "category": item.tag || "Malaysian Cuisine",
        "provider": {
            "@type": "Restaurant",
            "name": "Nasi Lemak Pak Aji",
            "servesCuisine": "Malaysian"
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <main className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="main">
                <div className="grid lg:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">

                    {/* Left Column: Image & Origin Tag */}
                    <div className="space-y-6">
                        <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-2xl ring-1 ring-border group" role="img" aria-label={`${item.name} dish photo`}>
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
                    <article className="flex flex-col h-full">
                        <section className="mb-8" aria-labelledby="item-title">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <Utensils />
                                </div>
                                <span className="text-sm font-semibold text-primary tracking-wide uppercase">
                                    {item.tag || "Signature Dish"}
                                </span>
                            </div>

                            <h1 id="item-title" className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4 leading-tight">
                                {item.name}
                            </h1>
                            <p className="text-3xl font-bold text-primary mb-6">{item.price}</p>

                            <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary/20 pl-6">
                                {item.description}
                            </p>
                        </section>

                        <section className="mt-auto" aria-labelledby="addons-title">
                            <h3 id="addons-title" className="text-xl font-bold font-serif text-foreground mb-6 border-b border-border pb-2">
                                Recommended Add-ons
                            </h3>
                            <ul className="grid sm:grid-cols-2 gap-4" role="list" aria-label="Add-on menu items">
                                {item.sub_menu.map((sub, idx) => (
                                    <li key={idx} className="flex justify-between items-center p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors shadow-sm">
                                        <span className="font-medium text-foreground">{sub.name}</span>
                                        <span className="text-primary font-bold">{sub.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row gap-4" aria-label="Share options">
                            <Dialog>
                                <DialogTrigger type='button' className='bg-primary text-primary-foreground font-bold p-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.98] flex-1' aria-label="Open QR code dialog">Get QR</DialogTrigger>
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
                        </section>
                    </article>
                </div>
            </main>
        </div>
    );
}