import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./css/globals.css";
import Header from "@/shared/Layout/Header";
import FloatingNavigation from "@/shared/components/FloatingNavigation";
import { Home, User, FolderOpen, Mail } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yashveer Dev",
  description: "Personal portfolio and development showcase",
};

const navigationItems = [
  { href: "#hero", label: "Home", icon: <Home size={16} /> },
  { href: "#about", label: "About", icon: <User size={16} /> },
  { href: "#projects", label: "Projects", icon: <FolderOpen size={16} /> },
  { href: "#contact", label: "Contact", icon: <Mail size={16} /> },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <FloatingNavigation items={navigationItems} />
      </body>
    </html>
  );
}
