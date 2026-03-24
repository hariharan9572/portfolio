import type { Metadata } from "next";
import "./lib/server-runtime-guard";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://minimal.hariharana.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hariharan | Software Engineer & Full Stack Developer",
  description:
    "Software developer focused on building scalable web applications and distributed systems. I work with modern technologies to create efficient solutions for complex problems.",
  keywords: [
    "hariharan",
    "hariharana",
    "portfolio",
    "software engineer",
    "software developer",
    "full stack developer",
    "java developer",
    "spring boot",
    "react developer",
    "next.js",
    "typescript",
    "postgresql",
    "docker",
    "logistics software",
    "vectora",
    "fleetcore",
    "droptruck",
    "Cloud Computing",
    "aws",
    "linux",
  ],
  authors: [{ name: "Hariharan", url: siteUrl }],
  creator: "Hariharan",
  publisher: "Hariharan",
  openGraph: {
    title: "Hariharan | Software Engineer",
    description:
      "Software developer focused on building scalable web applications and distributed systems. I work with modern technologies to create efficient solutions for complex problems.",
    url: siteUrl,
    siteName: "Hariharan Portfolio",
    images: [
      {
        url: "/hari-logo.png",
        width: 512,
        height: 512,
        alt: "Hariharan logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hariharan | Software Engineer",
    description:
      "Software developer focused on building scalable web applications and distributed systems. I work with modern technologies to create efficient solutions for complex problems.",
    images: ["/hari-logo.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", type: "image/x-icon" },
    ],
    apple: "/hari-logo.png",
    shortcut: "/favicon.ico?v=2",
  },
  alternates: {
    canonical: siteUrl,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
