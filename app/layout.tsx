import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

export const metadata: Metadata = {
  title: "King Group of Technology | Premium SaaS & Digital Solutions",
  description:
    "King Group of Technology - Innovating the Future, One Solution at a Time. World-class technology solutions that empower businesses to grow, scale, and dominate their industries.",
  keywords:
    "SaaS development, web development, mobile apps, AI solutions, cloud infrastructure, UI/UX design, IT consulting",
  authors: [{ name: "King Group of Technology" }],
  creator: "Muhammad Jawad",
  publisher: "King Group of Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kinggroup.tech",
    siteName: "King Group of Technology",
    title: "King Group of Technology | Premium SaaS & Digital Solutions",
    description:
      "World-class technology solutions that empower businesses to grow, scale, and dominate their industries.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "King Group of Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "King Group of Technology | Premium SaaS & Digital Solutions",
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
      <body className="antialiased bg-[#0D0D1A] text-white min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
