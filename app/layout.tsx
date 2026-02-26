import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

export const metadata: Metadata = {
  title: "KGT | Premium SaaS & Digital Solutions",
  description:
    "KGT - Innovating the Future, One Solution at a Time. World-class technology solutions that empower businesses to grow, scale, and dominate their industries.",
  keywords:
    "SaaS development, web development, mobile apps, AI solutions, cloud infrastructure, UI/UX design, IT consulting",
  authors: [{ name: "KGT" }],
  creator: "Muhammad Jawad",
  publisher: "KGT",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kinggroup.tech",
    siteName: "KGT",
    title: "KGT | Premium SaaS & Digital Solutions",
    description:
      "World-class technology solutions that empower businesses to grow, scale, and dominate their industries.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KGT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KGT | Premium SaaS & Digital Solutions",
    description:
      "World-class technology solutions that empower businesses to grow, scale, and dominate their industries.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased text-white min-h-screen relative">
        {/* Crown Watermark Background */}
        <div className="crown-watermark">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
          </svg>
        </div>
        {/* Golden Radial Overlay */}
        <div className="golden-overlay" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
