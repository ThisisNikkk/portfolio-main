import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Nikhil's Developer Portfolio",
    template: `%s | Nikhil Siwan`,
  },
  description:
    "Nikhil Siwan's Developer Portfolio – Explore projects, skills, and experience of Nikhil Siwan, a passionate developer from Siwan.",
  keywords: [
    "Nikhil Siwan",
    "Nikhil's Developer Portfolio",
    "Siwan developer",
    "web developer",
    "portfolio",
  ],
  openGraph: {
    title: "Nikhil's Developer Portfolio",
    description:
      "Nikhil Siwan's Developer Portfolio – Explore projects, skills, and experience of Nikhil Siwan, a passionate developer from Siwan.",
    url: DATA.url,
    siteName: "Nikhil Siwan",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Nikhil's Developer Portfolio",
    card: "summary_large_image",
  },
  verification: {
    google: "cBWpxSER3RPQ_6GRAharH", // Only the code, no prefix
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
