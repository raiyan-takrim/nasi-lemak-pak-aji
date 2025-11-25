import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Nav from "@/components/navigation/navbar";
import { Analytics } from "@/components/analytics";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nasi Lemak Pak Aji - Authentic Malaysian Heritage Cuisine",
    template: "%s | Nasi Lemak Pak Aji"
  },
  description: "Experience the authenticity of Nasi Lemak Pak Aji. Preserving tradition, one plate at a time. A culinary journey through our national identity.",
  keywords: ["Nasi Lemak", "Malaysian Food", "Pak Aji", "Traditional Cuisine", "Authentic Malaysian", "Heritage Food"],
  authors: [{ name: "Nasi Lemak Pak Aji" }],
  creator: "Nasi Lemak Pak Aji",
  publisher: "Nasi Lemak Pak Aji",
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: siteUrl,
    title: 'Nasi Lemak Pak Aji - Authentic Malaysian Heritage Cuisine',
    description: 'Experience the authenticity of Nasi Lemak Pak Aji. Preserving tradition, one plate at a time.',
    siteName: 'Nasi Lemak Pak Aji',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Nasi Lemak Pak Aji - Malaysian Heritage Cuisine',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nasi Lemak Pak Aji - Authentic Malaysian Heritage Cuisine',
    description: 'Experience the authenticity of Nasi Lemak Pak Aji. Preserving tradition, one plate at a time.',
    images: ['/og-image.jpg'],
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${playfair.variable} ${plusJakarta.variable} font-sans antialiased relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Nav />
          <div className={`min-h-screen`}>
            {children}
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
