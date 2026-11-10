import type { Metadata, Viewport } from "next";
import { AppProviders } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "VOXORA — Interview practice, built around you",
    template: "%s | VOXORA",
  },
  description: "Your next opportunity starts with preparation.",
  applicationName: "VOXORA",
};

export const viewport: Viewport = {
  themeColor: "#08080d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body><AppProviders>{children}</AppProviders></body>
    </html>
  );
}
