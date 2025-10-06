import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Read Smarter. Learn Faster.",
  description: "An AI-powered intelligent reader that boosts focus, comprehension, and progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased min-h-screen overflow-x-hidden bg-gradient-to-br from-[#050A1A] via-[#0A2240] to-[#0B2A55] text-white`}>
        {/* Background accents */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),transparent_60%)] blur-3xl" />
          <div className="absolute -bottom-40 -right-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.22),transparent_60%)] blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  );
}
