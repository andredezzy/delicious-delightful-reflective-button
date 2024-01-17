import "./globals.css";

import { Viewport } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

import { cn } from "@/utils/shadcn";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const newAthleticM54Font = localFont({
  src: "../public/fonts/NewAthleticM54.ttf",
  display: "swap",
  variable: "--font-new-athletic-m54",
  weight: "400",
});

const siteConfig = {
  name: "Delicious-delightful Reflective Button 😋",
  description:
    "A delightful, reflective button component for React, fully built with Tailwind CSS over shadcn/ui button component.",
  url: "https://delicious-delightful-reflective-button-andredezzy.vercel.app",
  ogImage:
    "https://delicious-delightful-reflective-button-andredezzy.vercel.app/images/opengraph.png",
  links: {
    twitter: "https://twitter.com/andredezzy",
  },
};

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,

  metadataBase: new URL(siteConfig.url),

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/opengraph.png`],
    creator: "@andredezzy",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("light", [
        montserrat.variable,
        newAthleticM54Font.variable,
      ])}
    >
      <body>{children}</body>
    </html>
  );
}
