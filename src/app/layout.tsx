import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuildSure | AI-Powered Construction Procurement Platform",
  description:
    "BuildSure is an AI-powered digital procurement platform for the Philippine construction industry. Automate material estimation, verify suppliers, compare prices, and manage procurement — all in one platform.",
  keywords: [
    "construction procurement",
    "AI material estimation",
    "Philippine construction",
    "supplier verification",
    "construction materials",
    "BuildSure",
  ],
  openGraph: {
    title: "BuildSure | AI-Powered Construction Procurement Platform",
    description:
      "Transform how construction materials are sourced, verified, and managed in the Philippines.",
    type: "website",
    locale: "en_PH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
