import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Nav from "@/components/navigation/navbar";

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

export const metadata: Metadata = {
  title: "Nasi Lemak Pak Aji - Malaysian Heritage",
  description: "Experience the authenticity of Nasi Lemak Pak Aji. Preserving tradition, one plate at a time. A culinary journey through our national identity.",
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
      </body>
    </html>
  );
}
