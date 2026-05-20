import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axis Studio — Creative Agency",
  description: "We build digital experiences that move people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
